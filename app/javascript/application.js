// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import { Application } from "@hotwired/stimulus";
import StimulusReflex from "stimulus_reflex";
import * as ActiveStorage from "@rails/activestorage";

import consumer from "./channels/consumer";
import CableReady from "cable_ready";
import mrujs from "mrujs";
import { CableCar } from "mrujs/plugins";
import "trix";
import "@rails/actiontext";
mrujs.start({
  plugins: [new CableCar(CableReady)],
});
ActiveStorage.start();
const application = Application.start();

// Configure Stimulus development experience
application.warnings = true;
application.debug = false;
window.Stimulus = application;

StimulusReflex.initialize(application, { isolate: true });

export { application };
