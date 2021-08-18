<template>
  <Layout>
    <Splash />
    <About />
    <Schedule />
    <Why />
    <Highlight />
    <Sponsors />
    <PastSpeakers />
    <Faq />
  </Layout>
</template>

<script>
import Splash from '@/sections/Splash';
import About from '@/sections/About';
import Why from '@/sections/Why';
import Highlight from '@/sections/Highlight';
import Sponsors from '@/sections/Sponsors';
import Schedule from '@/sections/Schedule';
import PastSpeakers from '@/sections/PastSpeakers';
import Faq from '@/sections/Faq';

export default {
  name: 'HomePage',
  components: {
    Splash,
    About,
    Schedule,
    Why,
    Highlight,
    Sponsors,
    PastSpeakers,
    Faq,
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>
