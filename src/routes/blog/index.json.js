import axios from 'axios';
import send from '@polka/send';

let json;

export async function get(req, res) {
  if (!json || process.env.NODE_ENV !== 'production') {
    const data = await axios.get('process.env.WP_SITE');

    json = JSON.stringify(data.data.posts);
  }

  send(res, 200, json, {
    'Content-Type': 'application/json',
    // 'Cache-Control': `max-age=${5 * 60 * 1e3}` // 5 minutes
  });
}
