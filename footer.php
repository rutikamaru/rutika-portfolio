 


        <!-- Modal -->
        <div class="modal fade" id="figmamodal" tabindex="-1" aria-labelledby="figmamodalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content border-0 bg-transparent">
                    <div class="modal-header border-0 justify-content-end">
                        <button type="button" class="btn bg-transparent border-0 text-white" data-bs-dismiss="modal"
                            aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="modal-body p-0">
                        <div class="figmamodalimgdiv text-center">
                            <img src="" id="figimage" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
</main>



<script src="assets/js/bootstrap.bundle.min.js"></script>

<!-- swiper -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- data aos -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>
     AOS.init({
    duration: 1500,   // 1.5s animation
    once: false       // false = replay when scrolling back
  });
</script>

<!-- icons -->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js">
</script>

<!-- smoth scroll animations -->
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<!-- ScrollTrigger Plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Lenis Smooth Scroll -->
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.27/bundled/lenis.min.js"></script>
 
<!-- custom js -->
<script src="assets/js/custom.js?v1=<?php echo rand(0, 99999); ?>"></script>
</body>

</html>