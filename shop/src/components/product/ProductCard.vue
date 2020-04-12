<template>
<div>
        <div class="col mb-4">
            <!-- Card -->
            <div class="card">

                <!--Card image-->
                <div class="view overlay">
                <img class="card-img-top" :src="product.image" alt="Card image cap">
                <router-link :to="{name: 'Product', params: {id: product._id}}">
                    <div class="mask rgba-white-slight"></div>
                </router-link>
                </div>

                <!--Card content-->
                <div class="card-body">
                <!--Title-->
                <h4 class="card-title">{{ product.name }}</h4>
                <!--Text-->
                <p class="card-text">{{ product.shortDescription }}</p>
                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                <router-link :to="{name: 'Product', params: {id: product._id}}" class="btn btn-primary btn-md">Visa Produkt</router-link>

                </div>

            </div>
            <!-- Card -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product']
}
</script>

<style>
.pageTitle {
    font-size: 2.5em;
    font-weight: 400;
}
/* a:link,
a.active,
a.hover,
a.visited {
    color: #fb8c00 ;
} */
</style>