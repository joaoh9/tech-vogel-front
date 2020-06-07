<template>
  <div>
    <PageSection bgColor="black">
      <h1 style="color: white" class="p-1 m-2">HIRE</h1>
      <div class="m-2 mb-5">
        <Card class="p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum maxime eveniet
          consequuntur beatae libero itaque, eaque eius consequatur iure earum ipsum architecto
          quas? Reiciendis autem quas architecto consequuntur ad.
        </Card>
      </div>
      <CardsSwiper> </CardsSwiper>
    </PageSection>
    <PageSection> </PageSection>
  </div>
</template>

<script>
import Card from 'Components/Card/Card';
import CardsSwiper from 'Components/Card/CardSwiper';
import PageSection from 'Interface/PageSection';

export default {
  name: 'Hire',
  components: {
    Card,
    CardsSwiper,
    PageSection,
  },
};
</script>

<style>
.bg-test {
  background-image: url('https://images.unsplash.com/photo-1585277846666-fc5401f572af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
  background-repeat: no-repeat;
  background-size: cover;
}
.full-width-div {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  left: 0;
}
</style>
