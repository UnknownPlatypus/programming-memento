function randomMoveBtn(el, maxX, maxY) {
  const randomX = Math.random() * maxX + "%";
  const randomY = Math.random() * maxY + "%";
  el.style.left = randomX;
  el.style.top = randomY;
}
function getDimensions(wrapper, btn){
  wrapper.setAttribute("open", true)
  const wrapperRect = wrapper.getBoundingClientRect()
  const btnRect = btn.getBoundingClientRect()
  wrapper.removeAttribute("open")
  return [
    (wrapperRect.width-btnRect.width)/wrapperRect.width*100,
    (wrapperRect.height-btnRect.height)/wrapperRect.height*100,
  ]
}
document.querySelectorAll(".unclickable").forEach((el) => {
  const detailsWrapper = el.parentElement.parentElement;
  detailsWrapper.classList.add("unclickable_wrapper");
  const dimensions = getDimensions(detailsWrapper, el);

  ["mouseup","mouseover", "focus"].forEach((event) => {
    el.addEventListener(event, () => randomMoveBtn(el,...dimensions))
  })
  detailsWrapper.addEventListener(
    "mousedown",
    () => randomMoveBtn(el,...dimensions)
  )
  el.addEventListener(
    "click",
    () => {
    alert("Winterzukko à La Cigale ca te tente <3 ? \nhttps://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjFoamFkcGg2Z3E2YWJiNWNsaTNlYjlrNmNwbTRiOXBja3NqOGI5bDZoZ2oyY2I1YzhyamlkcjNjNCB0aGliYXV0LmRlY29tYmVAbQ&tmsrc=thibaut.decombe%40gmail.com")
    }
  )
})