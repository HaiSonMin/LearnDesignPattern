class ProductSerial {
  id: string;
  productSerial_name: string;
  //...
}

class Product {
  id: string;
  product_name: string;
  product_sku: string;
  product_serial: ProductSerial;
  //...
}


class ProductAttribute {
  id: string;
  productAtt_name: string; // Store
  productAtt_parent: ProductAttribute; // Can be color of product
}

class ProductAttributeValue {
  id: string;
  productAttVal_value: string; // 1TB
  productAttVal_productAttribute: ProductAttribute; 
}

class Product_ProductAttribute {
  product_id: string;
  productAttribute_id: string; 
  price: string; 
}
