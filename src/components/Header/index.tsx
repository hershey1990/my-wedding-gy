export default () => {
  return (
    <header class="w-full py-4 bg-gray-200 dark:bg-gray-800 shadow-md">
      <div class="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
          My Preact App
        </h1>
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a
                href="#"
                class="text-gray-700 dark:text-gray-300 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-700 dark:text-gray-300 hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-700 dark:text-gray-300 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
