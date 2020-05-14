import axios from 'axios';
import send from '@polka/send';

let lookup;

export async function get(req, res) {
  if (!lookup || process.env.NODE_ENV !== 'production') {
    lookup = new Map();
    const data = await axios.get('process.env.WP_SITE');

    data.data.posts.forEach((post) => {
      lookup.set(post.slug, post);
    });
  }

  const post = lookup.get(req.params.slug);

  if (post) {
    // res.setHeader('Cache-Control', `max-age=${5 * 60 * 1e3}`); // 5 minutes
    send(res, 200, JSON.stringify(post));
  } else {
    send(res, 404, { message: 'not found' });
  }
}
