import { sampleFunc } from "./utils";

window.sampleFuncFromWindow = sampleFunc;

document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("btn");
	btn.addEventListener("click", sampleFunc);
});
