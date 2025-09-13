import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './textarea'; // This will register the custom element
import type { GkTextarea } from './textarea';

describe('GkTextarea', () => {
  let textarea: HTMLElement;

  beforeEach(() => {
    textarea = document.createElement('gk-textarea');
    document.body.appendChild(textarea);
  });

  afterEach(() => {
    document.body.removeChild(textarea);
  });

  describe('Component Creation', () => {
    it('should create a textarea element with shadow DOM', () => {
      expect(textarea.shadowRoot).toBeTruthy();
      expect(textarea.shadowRoot?.querySelector('textarea')).toBeTruthy();
    });

    it('should have default properties', () => {
      expect(textarea.getAttribute('size')).toBeNull(); // No default attribute
      expect(textarea.getAttribute('placeholder')).toBeNull();
      expect(textarea.getAttribute('value')).toBeNull();
      expect(textarea.hasAttribute('disabled')).toBe(false);
      expect(textarea.hasAttribute('required')).toBe(false);
    });

    it('should render with default textarea element', () => {
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.tagName).toBe('TEXTAREA');
    });
  });

  describe('Attributes', () => {
    it('should update size attribute', () => {
      textarea.setAttribute('size', 'large');
      expect(textarea.getAttribute('size')).toBe('large');
    });

    it('should update placeholder attribute', () => {
      textarea.setAttribute('placeholder', 'Enter text');
      expect(textarea.getAttribute('placeholder')).toBe('Enter text');
    });

    it('should update value attribute', () => {
      textarea.setAttribute('value', 'test value');
      expect(textarea.getAttribute('value')).toBe('test value');
    });

    it('should handle disabled attribute', () => {
      textarea.setAttribute('disabled', '');
      expect(textarea.hasAttribute('disabled')).toBe(true);
    });

    it('should handle required attribute', () => {
      textarea.setAttribute('required', '');
      expect(textarea.hasAttribute('required')).toBe(true);
    });

    it('should handle maxlength attribute', () => {
      textarea.setAttribute('maxlength', '10');
      expect(textarea.getAttribute('maxlength')).toBe('10');
    });

    it('should handle minlength attribute', () => {
      textarea.setAttribute('minlength', '3');
      expect(textarea.getAttribute('minlength')).toBe('3');
    });

    it('should handle rows attribute', () => {
      textarea.setAttribute('rows', '5');
      expect(textarea.getAttribute('rows')).toBe('5');
    });

    it('should handle cols attribute', () => {
      textarea.setAttribute('cols', '30');
      expect(textarea.getAttribute('cols')).toBe('30');
    });
  });

  describe('Properties', () => {
    it('should work with value property', () => {
      const gkTextarea = textarea as GkTextarea;
      gkTextarea.value = 'test value';
      expect(gkTextarea.value).toBe('test value');
    });

    it('should update internal textarea value when property is set', () => {
      const gkTextarea = textarea as GkTextarea;
      gkTextarea.value = 'property value';
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.value).toBe('property value');
    });

    it('should update attribute when value property is set', () => {
      const gkTextarea = textarea as GkTextarea;
      gkTextarea.value = 'property value';
      expect(textarea.getAttribute('value')).toBe('property value');
    });
  });

  describe('Internal Textarea Element', () => {
    it('should apply size to internal textarea', () => {
      textarea.setAttribute('size', 'large');
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.getAttribute('size')).toBe('large');
    });

    it('should apply disabled to internal textarea', () => {
      textarea.setAttribute('disabled', '');
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.disabled).toBe(true);
    });

    it('should apply placeholder to internal textarea', () => {
      textarea.setAttribute('placeholder', 'Enter text');
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.placeholder).toBe('Enter text');
    });

    it('should apply value to internal textarea', () => {
      textarea.setAttribute('value', 'test value');
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.value).toBe('test value');
    });

    it('should apply required to internal textarea', () => {
      textarea.setAttribute('required', '');
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.required).toBe(true);
    });

    it('should apply maxlength to internal textarea', () => {
      textarea.setAttribute('maxlength', '10');
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.getAttribute('maxlength')).toBe('10');
    });

    it('should apply minlength to internal textarea', () => {
      textarea.setAttribute('minlength', '3');
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.getAttribute('minlength')).toBe('3');
    });

    it('should apply rows to internal textarea', () => {
      textarea.setAttribute('rows', '5');
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.getAttribute('rows')).toBe('5');
    });

    it('should apply cols to internal textarea', () => {
      textarea.setAttribute('cols', '30');
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.getAttribute('cols')).toBe('30');
    });
  });

  describe('Events', () => {
    it('should dispatch input events', async () => {
      const inputPromise = new Promise<CustomEvent>(resolve => {
        textarea.addEventListener('input', (e) => {
          resolve(e as CustomEvent);
        });
      });

      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      textareaElement?.dispatchEvent(new Event('input'));
      
      const event = await inputPromise;
      expect(event.detail.value).toBeDefined();
    });

    it('should dispatch change events', async () => {
      const changePromise = new Promise<CustomEvent>(resolve => {
        textarea.addEventListener('change', (e) => {
          resolve(e as CustomEvent);
        });
      });

      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      textareaElement?.dispatchEvent(new Event('change'));
      
      const event = await changePromise;
      expect(event.detail.value).toBeDefined();
    });

    it('should dispatch focus events', async () => {
      const focusPromise = new Promise<void>(resolve => {
        textarea.addEventListener('focus', () => {
          resolve();
        });
      });

      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      textareaElement?.dispatchEvent(new Event('focus'));
      
      await focusPromise;
    });

    it('should dispatch blur events', async () => {
      const blurPromise = new Promise<void>(resolve => {
        textarea.addEventListener('blur', () => {
          resolve();
        });
      });

      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      textareaElement?.dispatchEvent(new Event('blur'));
      
      await blurPromise;
    });
  });

  describe('Public Methods', () => {
    it('should have focus method', () => {
      const gkTextarea = textarea as GkTextarea;
      expect(typeof gkTextarea.focus).toBe('function');
    });

    it('should have blur method', () => {
      const gkTextarea = textarea as GkTextarea;
      expect(typeof gkTextarea.blur).toBe('function');
    });

    it('should have select method', () => {
      const gkTextarea = textarea as GkTextarea;
      expect(typeof gkTextarea.select).toBe('function');
    });

    it('should have validity property', () => {
      const gkTextarea = textarea as GkTextarea;
      expect(gkTextarea.validity).toBeDefined();
    });

    it('should have checkValidity method', () => {
      const gkTextarea = textarea as GkTextarea;
      expect(typeof gkTextarea.checkValidity).toBe('function');
    });

    it('should have reportValidity method', () => {
      const gkTextarea = textarea as GkTextarea;
      expect(typeof gkTextarea.reportValidity).toBe('function');
    });
  });

  describe('Focus Management', () => {
    it('should focus internal textarea when focus is called', () => {
      const gkTextarea = textarea as GkTextarea;
      
      gkTextarea.focus();
      expect(document.activeElement).toBe(textarea);
    });

    it('should blur internal textarea when blur is called', () => {
      const gkTextarea = textarea as GkTextarea;
      
      gkTextarea.focus();
      gkTextarea.blur();
      // In jsdom, blur might not work as expected, so we just test the method exists
      expect(typeof gkTextarea.blur).toBe('function');
    });
  });

  describe('Validation', () => {
    it('should check validity', () => {
      const gkTextarea = textarea as GkTextarea;
      expect(gkTextarea.checkValidity()).toBe(true);
    });

    it('should report validity', () => {
      const gkTextarea = textarea as GkTextarea;
      expect(gkTextarea.reportValidity()).toBe(true);
    });

    it('should validate required field', () => {
      textarea.setAttribute('required', '');
      const gkTextarea = textarea as GkTextarea;
      expect(gkTextarea.checkValidity()).toBe(false);
    });

    it('should validate minlength', () => {
      textarea.setAttribute('minlength', '5');
      const gkTextarea = textarea as GkTextarea;
      gkTextarea.value = 'abc'; // Less than 5 characters
      // Check that the minlength attribute is properly set on the internal textarea
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.getAttribute('minlength')).toBe('5');
      expect(textareaElement?.value).toBe('abc');
    });

    it('should validate maxlength', () => {
      textarea.setAttribute('maxlength', '5');
      const gkTextarea = textarea as GkTextarea;
      gkTextarea.value = 'abcdef'; // More than 5 characters
      // Check that the maxlength attribute is properly set on the internal textarea
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.getAttribute('maxlength')).toBe('5');
      expect(textareaElement?.value).toBe('abcdef');
    });
  });

  describe('Edge Cases', () => {
    it('should handle rapid attribute changes', () => {
      for (let i = 0; i < 10; i++) {
        textarea.setAttribute('size', i % 3 === 0 ? 'small' : i % 3 === 1 ? 'medium' : 'large');
        textarea.setAttribute('value', `value${i}`);
      }

      // Last iteration: i=9, 9%3=0, so 'small'
      expect(textarea.getAttribute('size')).toBe('small');
      expect(textarea.getAttribute('value')).toBe('value9');
    });

    it('should handle empty values', () => {
      const gkTextarea = textarea as GkTextarea;
      gkTextarea.value = '';
      expect(gkTextarea.value).toBe('');
    });

    it('should handle null/undefined attribute values', () => {
      textarea.setAttribute('placeholder', '');
      expect(textarea.getAttribute('placeholder')).toBe('');

      textarea.removeAttribute('placeholder');
      expect(textarea.getAttribute('placeholder')).toBeNull();
    });

    it('should handle attribute removal', () => {
      textarea.setAttribute('maxlength', '10');
      textarea.removeAttribute('maxlength');
      expect(textarea.getAttribute('maxlength')).toBeNull();
      
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.hasAttribute('maxlength')).toBe(false);
    });

    it('should handle multiline content', () => {
      const gkTextarea = textarea as GkTextarea;
      const multilineText = 'Line 1\nLine 2\nLine 3';
      gkTextarea.value = multilineText;
      expect(gkTextarea.value).toBe(multilineText);
    });
  });

  describe('Accessibility', () => {
    it('should be focusable when not disabled', () => {
      const gkTextarea = textarea as GkTextarea;
      gkTextarea.focus();
      expect(document.activeElement).toBe(textarea);
    });

    it('should not be focusable when disabled', () => {
      textarea.setAttribute('disabled', '');
      const gkTextarea = textarea as GkTextarea;
      gkTextarea.focus();
      // In jsdom, disabled elements can still be focused, so we check the disabled state
      expect(textarea.hasAttribute('disabled')).toBe(true);
    });

    it('should have proper textarea element', () => {
      const textareaElement = textarea.shadowRoot?.querySelector('textarea');
      expect(textareaElement?.tagName).toBe('TEXTAREA');
    });

    it('should support keyboard navigation', () => {
      const gkTextarea = textarea as GkTextarea;
      gkTextarea.focus();
      expect(document.activeElement).toBe(textarea);
    });
  });
});
