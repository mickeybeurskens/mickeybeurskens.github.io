<template>
      <div class="px-auto mr-3 text-center">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEFZ31daHci1g/profile-displayphoto-shrink_800_800/0/1549903900250?e=1668038400&v=beta&t=5ZiT5xWlNA7Ayfpz2IoQPwU8exW0ps3KYfeY4Z0MBR0"
          class="rounded-circle profile-image"
        />
        <h3 class="mt-3">Mickey Beurskens</h3>
        <h6 class="profile-sub-header">Software Engineer & Entrepreneur</h6>
        <div class="profile-links text-left ml-3 py-0">
          <p>
            <a href="mailto:hello@forgefire.dev"
              ><i ></i> hello@forgefire.dev</a
            >
          </p>
          <p>
            <a href="https://github.com/mickeybeurskens"
              ><img src="" alt="git" />mickeybeurskens</a
            >
          </p>
        </div>
      </div>
</template>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
.profile-image {
  max-width: 14rem;
  box-shadow: 0px 10px 10px -8px;
}

.profile-sub-header {
  color: $font-color-body;
  font-size: 0.8rem;
  font-weight: 700;
}

.profile-links a {
  color: $font-color-body;
  margin: 0;
  padding: 0;
}

.profile-links a:hover {
  text-decoration: none;
  color: $accent-light-2;
}

.profile-links p {
  margin: 0;
}
</style>

