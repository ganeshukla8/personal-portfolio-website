document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("navLinks");
  const menuBtn = document.getElementById("menuBtn");

  function goTo(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  }

  document.querySelectorAll("[data-go]").forEach(function (button) {
    button.addEventListener("click", function () {
      goTo(button.getAttribute("data-go"));
    });
  });

  menuBtn.addEventListener("click", function () {
    const opened = navLinks.classList.toggle("open");
    menuBtn.textContent = opened ? "×" : "☰";
  });

  window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });

  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    this.innerHTML = '<div class="success"><h3>Message ready.</h3><p>Thanks for reaching out — your message has been prepared successfully.</p></div>';
  });
});

(function(){
  function initConnectModal(){
    const btn=document.getElementById("connectBtn");
    const modal=document.getElementById("connectModal");
    const close=document.getElementById("modalClose");
    const backdrop=document.getElementById("connectBackdrop");
    if(!btn||!modal||!close||!backdrop) return;

    function openModal(){
      modal.classList.add("open");
      modal.setAttribute("aria-hidden","false");
      document.body.classList.add("modal-open");
      setTimeout(function(){ close.focus(); }, 30);
    }
    function closeModal(){
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden","true");
      document.body.classList.remove("modal-open");
    }

    btn.addEventListener("click", function(e){ e.preventDefault(); openModal(); });
    close.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", function(e){
      if(e.key==="Escape" && modal.classList.contains("open")) closeModal();
    });
  }
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",initConnectModal);
  }else{
    initConnectModal();
  }
})();
