<template>
  <!-- Header -->
  <header id="header" class="w-full">
    <nav class="container mx-auto flex items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-[#1ed760] font-bold text-2xl justify-center hover:scale-110" href="#"
        >Musicfy</a
      >

      <div class="flex flex-grow items-center justify-end">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1 text-xs">
          <!-- Navigation Links -->
          <li class="p-1">
            <a
              class="text-gray-300 border border-transparent rounded-full bg-neutral-950 bg-opacity-60 p-2"
              href="#"
              >Download app</a
            >
          </li>

          <li class="p-1">
            <a
              class="text-gray-300 border border-transparent rounded-full bg-neutral-950 bg-opacity-60 p-2"
              href="#"
              >Login / Register
              <!--TODO change to icon  --></a
            >
          </li>
          <li class="p-1">
            <a
              class="text-gray-300 border border-transparent rounded-full bg-neutral-950 bg-opacity-60 p-2"
              href="#"
              >Manage</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <!-- Introduction -->
  <section class="mb-10 py-20 text-white text-center relative">
    <div class="container mx-auto flex">
      <img
        aria-hidden="false"
        draggable="false"
        loading="eager"
        src="/assets/img/liked-songs-300.png"
        alt="Liked songs"
        class=""
        srcset="
          /assets/img/liked-songs-300.png 150w,
          /assets/img/liked-songs-300.png 300w,
          /assets/img/liked-songs-640.png 320w,
          /assets/img/liked-songs-640.png 640w
        "
        sizes="(min-width: 1280px) 232px, 192px"
      />
      <div class="text-white main-header-content ml-5 flex-col self-end">
        <h4 class="text-left text-sm">Playlist</h4>
        <h1 class="text-left font-bold text-5xl mb-5">Liked songs</h1>
        <p class="text-left"><span class="font-bold">Username</span> Nº songs</p>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="container mx-auto">
    <div class="bg-gray900 flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-neutral-300 border-opacity-10">
        <span class="card-title secondary-text">Title</span>
        <!--TODO add columns like spotify <span class="card-title secondary-text">Album</span> -->
        <!-- Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 float-right secondary-text"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <li
          class="flex justify-between items-center p-2 pl-6 cursor-pointer transition duration-800 hover:bg-neutral-800"
        >
          <div>
            <a href="#" class="font-bold block text-gray-100">Song Title</a>
            <span class="secondary-text text-sm">Artist Name</span>
          </div>

          <div class="text-gray-100 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-neutral-800"
        >
          <div>
            <a href="#" class="font-bold block text-gray-100">Song Title</a>
            <span class="text-gray-300 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-100 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-800"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-800"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-800"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-800"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>

  <!-- Player -->
  <div class="fixed bottom-0 left-0 bg-black px-4 py-4 w-full flex flex-nowrap">
    <!-- Track Info -->
    <div class="text-white flex flex-col justify-center items-center">
      <p class="song-title font-bold">Song Title</p>
      <p class="song-artist">by Artist</p>
    </div>
    <div class="text-white grow flex flex-col gap-0.5">
      <!-- Play/Pause Button -->
      <button type="button">
        <p class="fa fa-play-circle text-white text-3xl hover:scale-110"></p>
      </button>
      <div class="flex flex-nowrap gap-3 w-full justify-center items-center">
        <!-- Current Position -->
        <div class="player-currenttime text-xs secondary-text">00:00</div>
        <!-- Scrub Container  -->
        <div class="group w-80 h-1 rounded relative bg-neutral-700 cursor-pointer">
          <!-- Player Ball -->
          <span
            class="absolute -top-1.5 -ml-2.5 text-white text-xs opacity-0 group-hover:opacity-100"
            style="left: 50%"
          >
            <i class="fas fa-circle"></i>
          </span>
          <!-- Player Progress Bar-->
          <span
            class="block h-1 rounded bg-white group-hover:bg-gradient-to-r from-green-500 to-green-400"
            style="width: 50%"
          ></span>
        </div>
        <!-- Duration -->
        <div class="player-duration text-xs secondary-text">03:06</div>
      </div>
    </div>
  </div>

  <!-- Auth Modal -->
  <div class="fixed z-10 inset-0 overflow-y-auto hidden" id="modal">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition hover:text-white text-white bg-blue-600"
                href="#"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a class="block rounded py-3 px-4 transition" href="#">Register</a>
            </li>
          </ul>

          <!-- Login Form -->
          <form>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <input
                type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
              />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
          <!-- Registration Form -->
          <form>
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <input
                type="text"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Name"
              />
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <input
                type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
              />
            </div>
            <!-- Age -->
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <input
                type="number"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password"
              />
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password"
              />
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label class="inline-block mb-2">Country</label>
              <select
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              >
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <input type="checkbox" class="w-4 h-4 float-left -ml-6 mt-1 rounded" />
              <label class="inline-block">Accept terms of service</label>
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
