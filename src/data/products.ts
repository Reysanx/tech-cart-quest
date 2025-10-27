export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  specs: Record<string, string>;
  stock: number;
  isNew?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "AMD Ryzen 9 7950X 4.5 GHz",
    price: 599,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500",
    category: "Procesadores",
    description: "Procesador de alto rendimiento con 16 núcleos y 32 hilos",
    specs: {
      Núcleos: "16",
      Hilos: "32",
      "Frecuencia Base": "4.5 GHz",
      "Frecuencia Turbo": "5.7 GHz",
      Socket: "AM5",
    },
    stock: 15,
    discount: 14,
  },
  {
    id: "2",
    name: "NVIDIA GeForce RTX 4080 16GB",
    price: 1299,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500",
    category: "Tarjetas Gráficas",
    description: "Tarjeta gráfica de última generación con Ray Tracing",
    specs: {
      Memoria: "16GB GDDR6X",
      "Velocidad Memoria": "22.4 Gbps",
      Interface: "PCIe 4.0",
      "CUDA Cores": "9728",
    },
    stock: 8,
    isNew: true,
    discount: 13,
  },
  {
    id: "3",
    name: "Corsair Vengeance RGB 32GB DDR5",
    price: 189,
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=500",
    category: "Memorias RAM",
    description: "Memoria RAM de alto rendimiento con iluminación RGB",
    specs: {
      Capacidad: "32GB (2x16GB)",
      Velocidad: "6000MHz",
      Latencia: "CL36",
      Tipo: "DDR5",
    },
    stock: 25,
  },
  {
    id: "4",
    name: "Samsung 990 PRO 2TB NVMe SSD",
    price: 219,
    originalPrice: 279,
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500",
    category: "Almacenamiento",
    description: "Unidad SSD NVMe de alto rendimiento",
    specs: {
      Capacidad: "2TB",
      Interface: "PCIe 4.0 x4",
      "Velocidad Lectura": "7450 MB/s",
      "Velocidad Escritura": "6900 MB/s",
    },
    stock: 30,
    discount: 21,
  },
  {
    id: "5",
    name: "ASUS ROG Strix B650-A Gaming WiFi",
    price: 279,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500",
    category: "Placas Base",
    description: "Placa base gaming con WiFi 6E",
    specs: {
      Socket: "AM5",
      Chipset: "B650",
      "Formato": "ATX",
      WiFi: "WiFi 6E",
    },
    stock: 12,
    isNew: true,
  },
  {
    id: "6",
    name: "Logitech G Pro X Superlight",
    price: 139,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    category: "Periféricos",
    description: "Ratón gaming inalámbrico ultra ligero",
    specs: {
      Sensor: "HERO 25K",
      Peso: "63g",
      "Batería": "70 horas",
      Conexión: "LIGHTSPEED Wireless",
    },
    stock: 40,
  },
  {
    id: "7",
    name: "Intel Core i9-13900K",
    price: 589,
    originalPrice: 649,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500",
    category: "Procesadores",
    description: "Procesador Intel de 13ª generación",
    specs: {
      Núcleos: "24 (8P+16E)",
      Hilos: "32",
      "Frecuencia Base": "3.0 GHz",
      "Frecuencia Turbo": "5.8 GHz",
    },
    stock: 10,
    discount: 9,
  },
  {
    id: "8",
    name: "MSI GeForce RTX 4070 Ti 12GB",
    price: 899,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
    category: "Tarjetas Gráficas",
    description: "GPU de alto rendimiento para gaming 4K",
    specs: {
      Memoria: "12GB GDDR6X",
      Interface: "PCIe 4.0",
      "Velocidad Boost": "2610 MHz",
      Sistema: "Triple Fan",
    },
    stock: 6,
    isNew: true,
  },
];
