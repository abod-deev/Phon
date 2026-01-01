
import { Product, Category, Review } from './types';

export const CATEGORIES: Category[] = [
  { id: 'apple', name: 'آيفون', image: 'https://picsum.photos/seed/iphone/400/300', count: 24 },
  { id: 'samsung', name: 'سامسونج', image: 'https://picsum.photos/seed/samsung/400/300', count: 32 },
  { id: 'xiaomi', name: 'شاومي', image: 'https://picsum.photos/seed/xiaomi/400/300', count: 18 },
  { id: 'huawei', name: 'هواوي', image: 'https://picsum.photos/seed/huawei/400/300', count: 12 },
];

export const PRODUCTS: Product[] = [
  // iPhone Section (5 Products)
  {
    id: 'i1',
    name: 'آيفون 15 برو ماكس',
    brand: 'Apple',
    price: 4999,
    oldPrice: 5499,
    rating: 4.9,
    image: 'https://picsum.photos/seed/i1/600/600',
    description: 'أقوى آيفون مع شريحة A17 Pro.',
    specs: { screen: '6.7"', processor: 'A17 Pro', ram: '8GB', battery: '4441 mAh', camera: '48MP' }
  },
  {
    id: 'i2',
    name: 'آيفون 15 برو',
    brand: 'Apple',
    price: 4299,
    rating: 4.8,
    image: 'https://picsum.photos/seed/i2/600/600',
    description: 'تصميم تيتانيوم مذهل.',
    specs: { screen: '6.1"', processor: 'A17 Pro', ram: '8GB', battery: '3274 mAh', camera: '48MP' }
  },
  {
    id: 'i3',
    name: 'آيفون 15',
    brand: 'Apple',
    price: 3499,
    rating: 4.7,
    image: 'https://picsum.photos/seed/i3/600/600',
    description: 'ديناميك آيلاند لأول مرة.',
    specs: { screen: '6.1"', processor: 'A16', ram: '6GB', battery: '3349 mAh', camera: '48MP' }
  },
  {
    id: 'i4',
    name: 'آيفون 14 بلس',
    brand: 'Apple',
    price: 2999,
    rating: 4.5,
    image: 'https://picsum.photos/seed/i4/600/600',
    description: 'بطارية تدوم طويلاً.',
    specs: { screen: '6.7"', processor: 'A15', ram: '6GB', battery: '4323 mAh', camera: '12MP' }
  },
  {
    id: 'i5',
    name: 'آيفون SE (2022)',
    brand: 'Apple',
    price: 1899,
    rating: 4.3,
    image: 'https://picsum.photos/seed/i5/600/600',
    description: 'القوة في حجم صغير.',
    specs: { screen: '4.7"', processor: 'A15', ram: '4GB', battery: '2018 mAh', camera: '12MP' }
  },

  // Samsung Section (5 Products)
  {
    id: 's1',
    name: 'سامسونج S24 ألترا',
    brand: 'Samsung',
    price: 4599,
    rating: 4.9,
    image: 'https://picsum.photos/seed/s1/600/600',
    description: 'ملك الاندرويد مع قلم S Pen.',
    specs: { screen: '6.8"', processor: 'Snapdragon 8 Gen 3', ram: '12GB', battery: '5000 mAh', camera: '200MP' }
  },
  {
    id: 's2',
    name: 'سامسونج S24 بلس',
    brand: 'Samsung',
    price: 3899,
    rating: 4.7,
    image: 'https://picsum.photos/seed/s2/600/600',
    description: 'شاشة مذهلة بدقة QHD+.',
    specs: { screen: '6.7"', processor: 'Exynos 2400', ram: '12GB', battery: '4900 mAh', camera: '50MP' }
  },
  {
    id: 's3',
    name: 'سامسونج Z Fold 5',
    brand: 'Samsung',
    price: 5999,
    rating: 4.6,
    image: 'https://picsum.photos/seed/s3/600/600',
    description: 'جهاز لوحي في جيبك.',
    specs: { screen: '7.6"', processor: 'Snapdragon 8 Gen 2', ram: '12GB', battery: '4400 mAh', camera: '50MP' }
  },
  {
    id: 's4',
    name: 'سامسونج A54 5G',
    brand: 'Samsung',
    price: 1499,
    rating: 4.4,
    image: 'https://picsum.photos/seed/s4/600/600',
    description: 'أفضل قيمة مقابل سعر.',
    specs: { screen: '6.4"', processor: 'Exynos 1380', ram: '8GB', battery: '5000 mAh', camera: '50MP' }
  },
  {
    id: 's5',
    name: 'سامسونج S23 FE',
    brand: 'Samsung',
    price: 2199,
    rating: 4.5,
    image: 'https://picsum.photos/seed/s5/600/600',
    description: 'تجربة الفلاجشيب بسعر أقل.',
    specs: { screen: '6.4"', processor: 'Exynos 2200', ram: '8GB', battery: '4500 mAh', camera: '50MP' }
  },

  // Xiaomi Section (5 Products)
  {
    id: 'x1',
    name: 'شاومي 14 برو',
    brand: 'Xiaomi',
    price: 3299,
    rating: 4.8,
    image: 'https://picsum.photos/seed/x1/600/600',
    description: 'كاميرات لايكا الاحترافية.',
    specs: { screen: '6.73"', processor: 'Snapdragon 8 Gen 3', ram: '12GB', battery: '4880 mAh', camera: '50MP' }
  },
  {
    id: 'x2',
    name: 'ريدمي نوت 13 برو+',
    brand: 'Xiaomi',
    price: 1699,
    rating: 4.6,
    image: 'https://picsum.photos/seed/x2/600/600',
    description: 'شاشة منحنية وكاميرا 200MP.',
    specs: { screen: '6.67"', processor: 'Dimensity 7200-Ultra', ram: '12GB', battery: '5000 mAh', camera: '200MP' }
  },
  {
    id: 'x3',
    name: 'بوكو F5 برو',
    brand: 'Xiaomi',
    price: 1999,
    rating: 4.7,
    image: 'https://picsum.photos/seed/x3/600/600',
    description: 'وحش الأداء والألعاب.',
    specs: { screen: '6.67"', processor: 'Snapdragon 8+ Gen 1', ram: '12GB', battery: '5160 mAh', camera: '64MP' }
  },
  {
    id: 'x4',
    name: 'شاومي 13T برو',
    brand: 'Xiaomi',
    price: 2499,
    rating: 4.6,
    image: 'https://picsum.photos/seed/x4/600/600',
    description: 'تحفة فنية بلمسة لايكا.',
    specs: { screen: '6.67"', processor: 'Dimensity 9200+', ram: '12GB', battery: '5000 mAh', camera: '50MP' }
  },
  {
    id: 'x5',
    name: 'ريدمي 13C',
    brand: 'Xiaomi',
    price: 549,
    rating: 4.1,
    image: 'https://picsum.photos/seed/x5/600/600',
    description: 'هاتف اقتصادي متميز.',
    specs: { screen: '6.74"', processor: 'Helio G85', ram: '6GB', battery: '5000 mAh', camera: '50MP' }
  },

  // Huawei Section (5 Products)
  {
    id: 'h1',
    name: 'هواوي P60 برو',
    brand: 'Huawei',
    price: 3799,
    rating: 4.9,
    image: 'https://picsum.photos/seed/h1/600/600',
    description: 'أفضل كاميرا تصوير في هاتف.',
    specs: { screen: '6.67"', processor: 'Snapdragon 8+ Gen 1', ram: '8GB', battery: '4815 mAh', camera: '48MP' }
  },
  {
    id: 'h2',
    name: 'هواوي Mate 50 برو',
    brand: 'Huawei',
    price: 3199,
    rating: 4.7,
    image: 'https://picsum.photos/seed/h2/600/600',
    description: 'تصميم أنيق وقوة جبارة.',
    specs: { screen: '6.74"', processor: 'Snapdragon 8+ Gen 1', ram: '8GB', battery: '4700 mAh', camera: '50MP' }
  },
  {
    id: 'h3',
    name: 'هواوي Nova 11 برو',
    brand: 'Huawei',
    price: 2299,
    rating: 4.5,
    image: 'https://picsum.photos/seed/h3/600/600',
    description: 'للشباب وهواة السيلفي.',
    specs: { screen: '6.78"', processor: 'Snapdragon 778G', ram: '8GB', battery: '4500 mAh', camera: '50MP' }
  },
  {
    id: 'h4',
    name: 'هواوي Nova Y91',
    brand: 'Huawei',
    price: 1199,
    rating: 4.3,
    image: 'https://picsum.photos/seed/h4/600/600',
    description: 'بطارية عملاقة وشاشة ضخمة.',
    specs: { screen: '6.95"', processor: 'Snapdragon 680', ram: '8GB', battery: '7000 mAh', camera: '50MP' }
  },
  {
    id: 'h5',
    name: 'هواوي Mate X3',
    brand: 'Huawei',
    price: 7999,
    rating: 4.8,
    image: 'https://picsum.photos/seed/h5/600/600',
    description: 'أنحف هاتف قابل للطي.',
    specs: { screen: '7.85"', processor: 'Snapdragon 8+ Gen 1', ram: '12GB', battery: '4800 mAh', camera: '50MP' }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    user: 'أحمد علي',
    comment: 'خدمة ممتازة وسرعة في التوصيل. الهاتف وصل بحالة ممتازة.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=ahmed'
  },
  {
    id: 'r2',
    user: 'سارة محمود',
    comment: 'أفضل متجر تعاملت معه، الأسعار منافسة جداً والدعم الفني سريع.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sara'
  },
  {
    id: 'r3',
    user: 'خالد عمر',
    comment: 'مقارنة الهواتف ساعدتني كثيراً في اختيار هاتفي الجديد.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=khaled'
  }
];
