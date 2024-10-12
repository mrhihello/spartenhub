document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      product.addEventListener('mouseover', function() {
        const details = product.querySelector('.product-details');
        details.style.display = 'block';
      });
  
      product.addEventListener('mouseout', function() {
        const details = product.querySelector('.product-details');
        details.style.display = 'none';
      });
    });
  });
  