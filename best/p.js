// Open modal for adding product
document.getElementById('addProductBtn').addEventListener('click', function() {
    document.getElementById('addProductModal').style.display = 'flex';
});

// Close modal
document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('addProductModal').style.display = 'none';
});

// Handle form submission
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    let productName = document.getElementById('productName').value;
    let productDescription = document.getElementById('productDescription').value;
    let productPrice = document.getElementById('productPrice').value;

    if (productName && productDescription && productPrice) {
        alert('Product added successfully!');
        // You can add the logic here to add the product to a list or database
        document.getElementById('addProductModal').style.display = 'none';
    } else {
        alert('Please fill all fields!');
    }
});

// Image upload logic
document.getElementById('imageUpload').addEventListener('change', function(event) {
    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('productImage').src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Example function for adding product to the cart
document.getElementById('addToCartButton').addEventListener('click', function() {
    alert('Product added to the cart!');
});
