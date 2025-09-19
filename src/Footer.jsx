

function Footer() {
  return (
  <footer className="w-full bg-[#23232a] text-[#e5e7eb] py-4 mt-auto shadow-inner border-t border-[#3f3f46]">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-2">
  <div className="text-center md:text-left text-sm font-medium">
          &copy; {new Date().getFullYear()} Employee Management. All rights reserved.
        </div>
  <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38bdf8] transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
          </a>
          <a
            href="mailto:support@employeemanagement.com"
            className="hover:text-[#38bdf8] transition-colors"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.857A2 2 0 0 1 4 5h16a2 2 0 0 1 1.99 1.857L12 13.414 2.01 6.857zM2 8.697V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.697l-8 5.6-8-5.6z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
