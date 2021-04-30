<template>
  <Layout>
    <Splash/>
    <About/>
    <Why/>
    <Highlight/>
    <PastSponsors/>
    <PastSpeakers/>
    <Faq/>
  </Layout>
</template>

<script>
import Splash from '@/sections/Splash';
import About from '@/sections/About';
import Why from '@/sections/Why';
import Highlight from '@/sections/Highlight';
import PastSponsors from '@/sections/PastSponsors';
import PastSpeakers from '@/sections/PastSpeakers';
import Faq from '@/sections/Faq';

export default {
  name: 'HomePage',
  components: {
    Splash,
    About,
    Why,
    Highlight,
    PastSponsors,
    PastSpeakers,
    Faq,
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
