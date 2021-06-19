<template>
  <div class="input">
    <label
      :class="[
        success && 'input__label--success',
        error && 'input__label--error',
        'input__label',
      ]"
      v-show="showLabel"
      :for="id"
    >
      {{ label + (required ? '*' : '') }}
    </label>
    <component
      :is="as"
      :class="[
        success && 'input__el--success',
        error && 'input__el--error',
        'input__el',
      ]"
      @input="
        (event) => {
          $emit('input', event.target.value);
        }
      "
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readOnly"
      :required="required"
      :value="value"
      :name="name"
      :type="type"
      :id="id"
    />
    <span 
      class="input__status input__status--error"
      v-if="typeof error === 'string'"
    >
      {{ error }}
    </span>
    <span
      class="input__status input__status--success"
      v-else-if="typeof success === 'string'"
    >
      {{ success }}
    </span>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid';

export default {
  name: 'Input',
  props: {
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: () => 'text',
    },
    id: {
      type: String,
      default: () => uuid().slice(-8),
    },
    placeholder: String,
    showLabel: Boolean,
    required: Boolean,
    disabled: Boolean,
    readOnly: Boolean,
    success: [Boolean, String],
    error: [Boolean, String],
    as: {
      type: String,
      default: () => 'input',
    },
  },
};
</script>

<style lang="scss">
@use '@/styles/mixins';
@use '@/styles/colors';
@use '@/styles/units';

.input {
  display: flex;
  flex-direction: column;

  &__label {
    @each $t, $v in map-get(units.$font-config, small) {
      #{$t}: $v;
    }
    font-weight: 700;
    margin-bottom: units.spacing(1);
  }

  &__el {
    @include mixins.transition(background-color);

    @each $tag, $val in map-get(units.$font-config, paragraph) {
      #{$tag}: $val;
    }

    &--error {
      background-color: colors.css-color(error, $alpha: 0.3);
    }

    &--success {
      background-color: colors.css-color(success, $alpha: 0.3);
    }

    &::placeholder {
      color: colors.css-color(placeholder);
    }

    background-color: colors.css-color(dark-navy);
    padding: units.spacing(2) units.spacing(4);
    border-radius: units.spacing(0.5);
    color: colors.css-color(white);
    font-family: units.$font;
    box-sizing: border-box;
    resize: vertical;
    border: none;
    width: 100%;
    margin: 0;
  }

  &__status {
    @each $t, $v in map-get(units.$font-config, small) {
      #{$t}: $v;
    }
    font-weight: 700;
    margin-top: units.spacing(1);

    &--error {
      color: colors.css-color(error);
    }

    &--success {
      color: colors.css-color(success);
    }
  }
}
</style>
