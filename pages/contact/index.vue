<template>
  <form id="contact" data-static-form-name="contact">
    <div>
      <label for="email"> Email </label>
      <input id="email" type="text" name="email" required />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "PageContact",
};
</script>
