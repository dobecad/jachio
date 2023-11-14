<script>
  export let text = "Hover me";
</script>

<style>
  .underline {
    position: relative;
    color: #9C1F58;
    text-decoration: none;
  }

  .underline::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background-color: #9C1F58; /* Set your underline color */
    transform-origin: center bottom;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .underline:hover::after {
    transform: scaleX(1);
  }
  
  .underline:not(:hover)::after {
    transform: scaleX(0);
  }
</style>

<div class="underline inline">{text}</div>