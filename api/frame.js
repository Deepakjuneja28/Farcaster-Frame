import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  res.json({
    frame: {
      version: "vNext",
      image: "https://i.ibb.co/60h9VH1M/Virat-Kohli-Dp-Hd.jpg",
      buttons: [
        {
          label: "Button 1",
          action: "post",
        },
        {
          label: "Visit Link",
          action: "link",
          target: "https://wikipedia.org",
        },
      ],
      postUrl: "https://farcaster-frame-plum.vercel.app",
    },
  });
}
