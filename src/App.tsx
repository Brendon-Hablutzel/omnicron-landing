import loadDemo from "./assets/omnicron-load-demo.gif";
import listDemo from "./assets/omnicron-list-demo.gif";

function App() {
  return (
    <>
      {/* <div className="bg-bg-dark max-w-[100vw] min-h-[5vh] max-h-[5vh] flex items-center text-text-light text-xl">
        <div className="flex justify-between w-full mx-4 my-4">
          <div className="px-3">
            logo
          </div>
          <div className="flex justify-end">
            <div className="px-3">
              <a>
              About
              </a>
            </div>
            <div className="px-3">
              <a>
                CLI
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-bg-dark max-w-[100vw] min-h-[60vh] text-center flex justify-center items-center text-text-light">
        <div>
          <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl">
            Omnicron
          </h1>
          <h3 className="m-3 text-2xl md:text-3xl">
            A comprehensive cron job monitoring solution
          </h3>
          <div className="flex justify-center">
            <a
              href="https://www.npmjs.com/package/@omnicron/cli"
              target="_blank"
            >
              <div className="bg-bright-green p-3 m-3 font-bold rounded-md text-lg md:text-xl">
                Get the CLI
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-bg-lighter min-h-[40vh] max-w-[100vw]">
        <div className="xl:flex xl:justify-evenly p-10 xl:py-20 text-text-light">
          <div className="xl:max-w-[25vw]">
            <h2 className="text-3xl font-bold py-2 text-center xl:text-left">
              Easy Setup
            </h2>
            <p className="text-xl leading-8">
              To get started, all you need is{" "}
              <a
                className="text-bright-green hover:underline"
                href="https://nodejs.org/en/download"
                target="_blank"
              >
                Node
              </a>{" "}
              and{" "}
              <a
                className="text-bright-green hover:underline"
                href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
                target="_blank"
              >
                NPM
              </a>
              . Then, use the commands below to install the Omnicron CLI, set up
              your device, and enable monitoring for your existing cron jobs.
            </p>
            <br />
            <pre>
              <div className="bg-slate-900 p-3 rounded-md font-mono text-xs sm:text-lg md:text-lg lg:text-lg xl:text-smaller 2xl:text-base">
                <span className="text-text-light/30">$</span> npm i -g
                @omnicron/cli{"\n"}
                <span className="text-text-light/30">$</span> omnicron-cli
                device register{"\n"}
                <span className="text-text-light/30">$</span> omnicron-cli jobs
                load --from-local
              </div>
            </pre>
          </div>
          <div className="xl:max-w-[25vw] py-8 xl:py-0">
            <h2 className="text-3xl font-bold py-2 text-center xl:text-left">
              Reliable Monitoring
            </h2>
            <p className="text-xl leading-8">
              Native cron jobs are difficult to test and debug, and the last
              thing you want is unexpected errors plaguing your background
              tasks. Omnicron is built on high-availability{" "}
              <a
                href="https://aws.amazon.com/what-is/serverless-computing/"
                target="_blank"
                className="text-bright-green hover:underline"
              >
                AWS serverless
              </a>{" "}
              infrastructure and monitors all invocations, making cron jobs
              simple and predictable.
            </p>
          </div>
          <div className="xl:max-w-[25vw]">
            <h2 className="text-3xl font-bold py-2 text-center xl:text-left">
              Comprehensive Features
            </h2>
            <p className="text-xl leading-8">
              Omnicron captures detailed information about every job and every
              invocation, including duration, stdout, stderr, and any errors
              that the command emitted. All of these analytics can be easily
              navigated using the feature-rich CLI: filter to invocations within
              a specific time range, view jobs based on the result of their last
              invocation, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bg-medium min-h-[60vh] max-w-[100vw] text-text-light">
        <div className="p-10 xl:flex xl:justify-center xl:py-20">
          <div className="xl:pr-5 xl:max-w-[30vw]">
            <h2 className="text-3xl font-bold pb-2 text-center xl:text-left">
              Integrate existing jobs with a single command
            </h2>
            <p className="text-xl leading-8">
              The CLI gives you full control, allowing you to choose which of
              your existing jobs to monitor. For those you want to have
              monitored, all you need is to run a single command, select{" "}
              <span className="bg-slate-900 p-1 rounded-md">y</span> for the
              jobs you want to monitor, and Omnicron will do the rest.
            </p>
          </div>
          <div className="py-5 xl:py-0 xl:pl-5 flex justify-center xl:block xl:max-w-[30vw]">
            <img src={loadDemo}></img>
          </div>
        </div>
      </div>
      <div className="bg-bg-lighter min-h-[60vh] max-w-[100vw] text-text-light">
        <div className="p-10 xl:flex xl:justify-center xl:py-20">
          <div className="xl:pr-5 xl:max-w-[35vw]">
            <h2 className="text-3xl font-bold pb-2 text-center xl:text-left">
              Get detailed invocation data for any job, at any time
            </h2>
            <p className="text-xl leading-8">
              The CLI offers a variety of filters to browse and select specific
              jobs and specific invocations. Omnicron securely stores all
              relevant execution data, and the granular access made possible by
              the CLI makes debugging cron jobs easier than ever before.
            </p>
          </div>
          <div className="py-5 xl:py-0 xl:pl-5 flex justify-center xl:block xl:max-w-[35vw]">
            <img src={listDemo} />
          </div>
        </div>
      </div>
      <div className="bg-bg-dark min-h-[15vh] max-w-[100vw] text-text-light flex items-center justify-center">
        <div className="text-center">
          Note: the CLI requires you provide a monitoring API URL during setup:
          please email{" "}
          <a
            className="text-bright-green hover:underline"
            href="mailto:booklvrbren@gmail.com"
          >
            booklvrbren@gmail.com
          </a>{" "}
          for it if you would like to use Omnicron.
        </div>
      </div>
    </>
  );
}

export default App;
