import { kv } from '@vercel/kv';

const defaultData = {
  contacts: {
    email: "rizzflorist12@gmail.com",
    phone: "082322130101",
    whatsapp: "https://wa.me/6282322130101",
    instagram: "https://www.instagram.com/rizz_florist.id",
    instagramUser: "@rizz_florist.id",
    address: "Jakarta, Indonesia"
  },
  pricing: [
    {
      id: "p8",
      title: "Papan Bunga J2",
      size: "Ukuran 125x200",
      price: "Rp. 550.000",
      features: [
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    },
    {
      id: "p6",
      title: "Papan Bunga Standart",
      size: "Ukuran 150x200",
      price: "Rp. 600.000",
      features: [
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    },
    {
      id: "p1",
      title: "Papan Bunga 4 Titik",
      size: "Ukuran 125x200",
      price: "Rp. 700.000",
      features: [
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    },
    {
      id: "p7",
      title: "Papan Bunga J3",
      size: "Ukuran 150x200",
      price: "Rp. 750.000",
      features: [
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    },
    {
      id: "p11",
      title: "Bunga Meja",
      size: "",
      price: "Rp. 750.000",
      features: [
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    },
    {
      id: "p9",
      title: "Standing Flower",
      size: "Bunga Atas",
      price: "Rp. 850.000",
      features: [
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    },
    {
      id: "p10",
      title: "Standing Flower",
      size: "Bunga Atas dan Bawah",
      price: "Rp. 1.000.000",
      features: [
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    },
    {
      id: "p4",
      title: "Papan Bunga Besar 4 Titik (kuping Lebar)",
      size: "Ukuran 150x200",
      price: "Rp. 1.200.000",
      features: [
        "Kuping Lebar",
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    },
    {
      id: "p2",
      title: "Papan Bunga Sambung",
      size: "Ukuran 125x400",
      price: "Rp. 1.300.000",
      features: [
        "Papan Bunga Sambung",
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    },
    {
      id: "p3",
      title: "Papan Bunga Sambung",
      size: "Ukuran 150x400",
      price: "Rp. 1.500.000",
      features: [
        "Papan Bunga Sambung",
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    },
    {
      id: "p5",
      title: "Papan Bunga Besar 6 Titik",
      size: "Ukuran 150x200",
      price: "Rp. 1.500.000",
      features: [
        "Free Custom",
        "Cocok untuk segala moment",
        "Bunga segar & berkualitas tinggi",
        "Desain elegan"
      ]
    }
  ],
  gallery: [
    { url: "img/img1.jpeg", alt: "Papan bunga Rizz Florist 1" },
    { url: "img/img2.jpeg", alt: "Papan bunga Rizz Florist 2" },
    { url: "img/img3.jpeg", alt: "Papan bunga Rizz Florist 3" },
    { url: "img/img4.jpeg", alt: "Papan bunga Rizz Florist 4" },
    { url: "img/img5.jpeg", alt: "Papan bunga Rizz Florist 5" },
    { url: "img/img6.jpeg", alt: "Papan bunga Rizz Florist 6" },
    { url: "img/img7.jpeg", alt: "Papan bunga Rizz Florist 7" },
    { url: "img/img8.jpeg", alt: "Papan bunga Rizz Florist 8" },
    { url: "img/img9.jpeg", alt: "Papan bunga Rizz Florist 9" },
    { url: "img/img10.jpeg", alt: "Papan bunga Rizz Florist 10" },
    { url: "img/img11.jpeg", alt: "Papan bunga Rizz Florist 11" },
    { url: "img/img12.jpeg", alt: "Papan bunga Rizz Florist 12" },
    { url: "img/img13.jpeg", alt: "Papan bunga Rizz Florist 13" },
    { url: "img/img14.jpeg", alt: "Papan bunga Rizz Florist 14" },
    { url: "img/img15.jpeg", alt: "Papan bunga Rizz Florist 15" },
    { url: "img/img16.jpeg", alt: "Papan bunga Rizz Florist 16" },
    { url: "img/img17.jpeg", alt: "Papan bunga Rizz Florist 17" },
    { url: "img/img18.jpeg", alt: "Papan bunga Rizz Florist 18" },
    { url: "img/img19.jpeg", alt: "Papan bunga Rizz Florist 19" },
    { url: "img/img20.jpeg", alt: "Papan bunga Rizz Florist 20" },
    { url: "img/img21.jpeg", alt: "Papan bunga Rizz Florist 21" },
    { url: "img/img22.jpeg", alt: "Papan bunga Rizz Florist 22" },
    { url: "img/img23.jpeg", alt: "Papan bunga Rizz Florist 23" },
    { url: "img/img24.jpeg", alt: "Papan bunga Rizz Florist 24" },
    { url: "img/img25.jpeg", alt: "Papan bunga Rizz Florist 25" },
    { url: "img/img26.jpeg", alt: "Papan bunga Rizz Florist 26" },
    { url: "img/img27.jpeg", alt: "Papan bunga Rizz Florist 27" },
    { url: "img/img28.jpeg", alt: "Papan bunga Rizz Florist 28" },
    { url: "img/img29.jpeg", alt: "Papan bunga Rizz Florist 29" },
    { url: "img/img30.jpeg", alt: "Papan bunga Rizz Florist 30" },
    { url: "img/img31.jpeg", alt: "Papan bunga Rizz Florist 31" },
    { url: "img/img32.jpeg", alt: "Papan bunga Rizz Florist 32" },
    { url: "img/img33.jpeg", alt: "Papan bunga Rizz Florist 33" },
    { url: "img/img34.jpeg", alt: "Papan bunga Rizz Florist 34" },
    { url: "img/img35.jpeg", alt: "Papan bunga Rizz Florist 35" },
    { url: "img/img36.jpeg", alt: "Papan bunga Rizz Florist 36" }
  ]
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = await kv.get('rizz_florist_data');
    if (!data) {
      // If data is empty in KV, initialize it with defaultData
      await kv.set('rizz_florist_data', defaultData);
      return res.status(200).json(defaultData);
    }
    return res.status(200).json(data);
  } catch (error) {
    console.error("Vercel KV Error, falling back to static defaults:", error);
    return res.status(200).json(defaultData);
  }
}
