export const InstallBanner = ({ appName, installUrl }) => (
  <div className="not-prose my-6 flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 p-6 shadow-md sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="m-0 text-lg font-semibold text-white">
        Not using {appName} yet?
      </p>
      <p className="m-0 mt-1 text-sm text-purple-100">
        Install the app first — then follow these docs live in your store
        as you read. Free to install, up and running in minutes.
      </p>
    </div>
    <a
      href={installUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 no-underline transition-colors hover:bg-purple-100"
    >
      Install the app →
    </a>
  </div>
);
