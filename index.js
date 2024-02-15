let titlecount = 1;
let Totalprice = 0;

const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("click", function () {
    const title = card.querySelector("h3").innerText;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );

    const titlecontainer = document.getElementById("title-container");
    const p = document.createElement("p");

    p.innerText = titlecount + " ." + title;

    titlecontainer.appendChild(p);
    titlecount++;

    Totalprice = Totalprice + price;
    document.getElementById("totalPrice").innerText = Totalprice.toFixed(2);
  });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const coupon = document.getElementById("input-field").value;
  const couponCode = coupon.split(" ").join("").toUpperCase();

  if (Totalprice >= 200) {
    if (couponCode === "SELL200") {
      // discount
      const discountElement = document.getElementById("discountPrice");
      const discountPrice = (Totalprice / 100) * 20;
      discountElement.innerText = discountPrice.toFixed(2);
      // total
      const totalElement = document.getElementById("total");
      totalElement.innerText = Totalprice - discountPrice.toFixed(2);
      document.getElementById("input-field").value = "";
    } else {
      alert("invalid coupon code");
      document.getElementById("input-field").value = "";
    }
  } else {
    alert("please purchase more");
    document.getElementById("input-field").value = "";
  }
});
