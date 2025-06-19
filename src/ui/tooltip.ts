type TooltipOptions = {
  text: string;
  offsetX?: number;
  offsetY?: number;
  className?: string;
};

export function tooltip(id: string, options: TooltipOptions): void {
  const { text, offsetX = 10, offsetY = 10, className = "tooltip" } = options;

  const container = document.getElementById(id);
  if (!container) {
    console.error(`Element with id "${id}" not found.`);
    return;
  }

  const tooltip = document.createElement("div");
  tooltip.textContent = text;
  tooltip.className = className;
  tooltip.style.position = "absolute";
  tooltip.style.pointerEvents = "none";

  tooltip.style.zIndex = "1000";
  tooltip.style.visibility = "hidden";

  container.appendChild(tooltip);

  const updateTooltipPosition = (event: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    tooltip.style.left = `${event.pageX - rect.left + offsetX}px`;
    tooltip.style.top = `${event.pageY - rect.top + offsetY}px`;
  };

  const showTooltip = () => {
    tooltip.style.visibility = "visible";
  };

  const hideTooltip = () => {
    tooltip.style.visibility = "hidden";
  };

  container.addEventListener("mousemove", updateTooltipPosition);
  container.addEventListener("mouseenter", showTooltip);
  container.addEventListener("mouseleave", hideTooltip);

  // Cleanup function
}
