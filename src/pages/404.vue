<template>
  <Layout>
    <Section id="err404" as="section">
      <div class="err404__content">
        <Typography
          class="err404__heading"
          type="heading2"
          transform="uppercase"
          as="h2"
        >
          ERROR 404
        </Typography>
        <Typography type="p" transform="uppercase" as="p">
          Sorry, we couldn't find the resource you were looking for :(
        </Typography>
      </div>
    </Section>
  </Layout>
</template>

<script>
import Button from '@/components/Button';
import Section from '@/components/Section';
import Typography from '@/components/Typography';

export default {
  name: '404',
  components: {
    Section,
    Typography,
    Button,
  },
};
</script>

<style lang="scss">
@use '@/styles/units';
@use '@/styles/colors';

#err404 {
  margin-top: units.spacing(74);
  margin-bottom: units.spacing(74);
}

.err404 {
  &__content {
    display: block;
  }

  &__heading {
    margin-bottom: units.spacing(8);
    display: flex;
    align-items: flex-end;
  }
}
</style>
