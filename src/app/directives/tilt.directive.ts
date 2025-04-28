import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  AfterViewInit,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective implements AfterViewInit {
  el = inject(ElementRef);
  renderer = inject(Renderer2);

  ngAfterViewInit() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener(
        'deviceorientation',
        this.handleOrientation.bind(this)
      );
    }
    this.setTransition();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    this.setTransform(rotateX, rotateY);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setTransform(0, 0);
  }

  private handleOrientation(event: DeviceOrientationEvent) {
    if (event.beta !== null && event.gamma !== null) {
      const rotateX = event.beta / 3;
      const rotateY = event.gamma / 3;

      this.setTransform(rotateX, rotateY);
    }
  }

  private setTransform(rotateX: number, rotateY: number) {
    const transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    this.renderer.setStyle(this.el.nativeElement, 'transform', transform);
  }

  private setTransition() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'transform 0.5s ease'
    );
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'transform');
  }
}
