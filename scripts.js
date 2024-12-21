function updateTotalPrice(itemId) {
    const quantityInput = document.getElementById(`quantity${itemId}`);
    const cartItem = quantityInput.closest('.cart-item');
    const unitPrice = parseInt(cartItem.querySelector('.cart-item-price').innerText.replace(/\D/g, ''));
    const totalPrice = unitPrice * quantityInput.value;
  
    cartItem.querySelector('.cart-item-total').innerText = `قیمت کل: ${totalPrice.toLocaleString()} تومان`;
    updateOrderSummary();
  }
  
  function removeCartItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateOrderSummary();
  }
  
  function updateOrderSummary() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
  
    cartItems.forEach(item => {
      const itemTotal = parseInt(item.querySelector('.cart-item-total').innerText.replace(/\D/g, ''));
      totalPrice += itemTotal;
    });
  
    const discount = totalPrice * 0.1;
    const finalPrice = totalPrice - discount;
  
    document.querySelector('.summary-total').innerText = `جمع کل: ${totalPrice.toLocaleString()} تومان`;
    document.querySelector('.summary-discount').innerText = `تخفیف: ${discount.toLocaleString()} تومان`;
    document.querySelector('.summary-final').innerHTML = `<strong>هزینه نهایی: ${finalPrice.toLocaleString()} تومان</strong>`;
  }
  
  document.querySelectorAll('.cart-item-quantity input').forEach((input, index) => {
    input.addEventListener('input', () => updateTotalPrice(index + 1));
  });
  
  document.querySelectorAll('.remove-item-btn').forEach(button => {
    button.addEventListener('click', () => removeCartItem(button));
  });
  
  updateOrderSummary();