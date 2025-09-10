# Widget Test Server

## Files

- host.html: raw html containing the widget and ga script init
- server.js: simple server to serve the host.html file at port 4000

## Inserting the widget

```html
<!-- EMRG Widget Integration -->
<script>
  (function (d) {
    var config = {
      clinicId: 25, // Replace with your clinic ID
      gaMeasurementId: "G-XXXXXXXXXX", // Replace with your Google Analytics ID
    };

    var script = d.createElement("script");
    var firstScript = d.querySelector("script");

    script.src = "https://joinemrg.com/widget.js";
    script.async = true;
    script.defer = true;
    script.onload = function () {
      if (window.emrgWidget) {
        window.emrgWidget.init(config);
      }
    };

    firstScript.parentNode.insertBefore(script, firstScript);
  })(document);
</script>
<!-- End EMRG Widget -->

<!-- Add this button anywhere on your page to launch the widget -->
<button onclick="window.launchEmrgWidget && window.launchEmrgWidget()">
  Book Appointment
</button>
```
