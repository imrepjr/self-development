import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

const OPEN_CLASS = 'open';
const SUPPORTED_KEYS = [' ', 'Enter', 'Escape'];

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding(`class.${OPEN_CLASS}`) isOpen = false;

  @HostListener('document:click', ['$event.target']) toggleOpenOnClick(
    target: HTMLElement
  ) {
    this.isOpen = this.hostElement.nativeElement.contains(target)
      ? !this.isOpen
      : false;
  }
  @HostListener('keydown', ['$event.key']) toggleOpenOnKeydown(keyPressed) {
    if (!SUPPORTED_KEYS.includes(keyPressed)) return;
    this.isOpen = keyPressed === 'Escape' ? false : !this.isOpen;
  }

  constructor(private hostElement: ElementRef<HTMLElement>) {}

  // NOTE: my overcomplicated solution below
  // @HostListener('click') onClick() {
  //   const hostElement = this.element.nativeElement;
  //   if (hostElement.classList.contains(OPEN_CLASS)) {
  //     this.renderer.removeClass(hostElement, OPEN_CLASS);
  //   } else {
  //     this.renderer.addClass(hostElement, OPEN_CLASS);
  //   }
  // }

  // constructor(
  //   private element: ElementRef<HTMLElement>,
  //   private renderer: Renderer2
  // ) {}
}
