--------------------------------------
post from browser console
---------------------------------
fetch("http://localhost:4000/__coverage__", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(window.__coverage__)
});

------------------------------------------
npx babel src --out-dir instrumented --source-maps inline  
--------------------------------------------
xcopy src\* instrumented\ /E /I /Y /EXCLUDE:exclude.txt
----------------------------------------

coverage report at http://localhost:4000/coverage/

application at http://localhost:3000/