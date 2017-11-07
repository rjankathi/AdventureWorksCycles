# Welcome to **Adventure Works Cycles Online Store!**
## My goal is to build an asp.net core application using all the cutting edge technlogies:
###
1. *ASP.NET Core*, *Web API* and c# for cross-platform server-side code
2. *Angular 2/4* (Its just Angular you people :P) and *TypeScript* for client-side code
3. *Webpack* for building and bundling client-side resources
4. *Angualar Material* for layout and styling

#### <a href="https://stackblitz.com/edit/adventureworkscycles-with-ng-material" target="_blank">App Demo</a>
![ScreenShot](https://github.com/rjankathi/AdventureWorksCycles/blob/master/screenshots/AWC1.gif)

## To help you get started, I've also set upthe following:
  
1. Client-side navigation. For example, click Counter then Back to return here.
2. Server-side prerendering. For faster initial loading and improved SEO, your Angular app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.
3. Webpack dev middleware. In development mode, there's no need to run the webpack build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.
4. Hot module replacement. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular app will be rebuilt and a new instance injected is into the page.
Efficient production builds. In production mode, development-time features are disabled, and the webpack build tool produces minified static CSS and JavaScript files.

#### Theres a AWCNotes.txt file in the root folder where you can find all the details I wrote while developing the application. More to be added to this notes.
##### I am copying the notes information below.
1. Create A class library project AWC.Models

2. Run Install-Package Microsoft.EntityFrameworkCore.SqlServer -Version 1.1.1 to the project

3. Run Install-Package Microsoft.EntityFrameworkCore.Tools -Version 1.1.1

4. Run Install-Package Microsoft.EntityFrameworkCore.Design -Version 1.1.1

5. Install-Package Microsoft.EntityFrameworkCore.SqlServer.Design -Version 1.1.1

6. Create AWC.WebApi Web Application - Web Api App

7. In Pakcage Manager Console Awc.Models project selected run below command

..* "Scaffold-DbContext "Server=RAJ-WIN10;Database=AdventureWorks2014;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir DBModels"

8. In the DBModels all the database entities will be scaffoled 

..1. Note 1: AWC.WebApi should be the starte up project while running the above command

..2. Note 2: you moght face this error

..3. "Could not load file or assembly 'Microsoft.EntityFrameworkCore.Design, Culture=neutral, PublicKeyToken=null'. The system cannot find the file specified."

..4. Ref:"https://github.com/aspnet/EntityFrameworkCore/issues/7977" 

9. In Startup.cs of AWC.WebApi Project add this code to Inject DBContext as Service into the application

 services.AddDbContext<Models.DBModels.AdventureWorks2014Context>(options => {
                options.UseSqlServer(Configuration.GetConnectionString("AWCD_Connection"));
            });

10. Scaffold-DbContext "Data Source=.;Initial Catalog=DBEfCore;Integrated Security=SSPI;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models

..1 Data Source=RAJ-WIN10;Initial Catalog=AdventureWorks2014;Integrated Security=True


..2. dotnet ef --startup-project ../AWC.WebApi/ dbcontext scaffold "Server=RAJ-WIN10;
     initial catalog=AdventureWorks2014;integrated security=True;" 
     Microsoft.EntityFrameworkCore.SqlServer -o DBModels


<ItemGroup>
    <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet">
      <Version>1.0.0-*</Version>
    </DotNetCliToolReference>
  </ItemGroup>
  
11. Related to Angular material 


## Ref Links:

1. https://stackoverflow.com/questions/43133736/unable-to-get-route-working-with-2-levels-of-lazy-loaded-modules-nested
2. https://stackoverflow.com/questions/40816415/angular2-submodules-forchild-routes-overwrite-root-routes
3. https://stackoverflow.com/questions/41020569/angular2-routing-import-submodule-with-routing-making-it-prefixed/45718262#45718262
4. https://plnkr.co/edit/XilkY55WXle2hFF0Pelx?p=preview
5. Angular material md to mat changes in beta
..1. https://changelogs.md/github/angular/material2/
..2. https://www.npmjs.com/package/angular-material-prefix-updater
..3. https://github.com/angular/angular/issues/15851

6. https://stackoverflow.com/questions/46439473/import-materialmodule-into-feature-module (commnet on this when you get back to AWC)

###### More to come .....

## Runnig demo of the bare bones application

[adventureworkscycles-with-ng-material](https://stackblitz.com/edit/adventureworkscycles-with-ng-material)
1. https://stackblitz.com is an awesome online eitor for creating Angular and React apps and show to the world and get suggestions if you get stuck.
2. Thats the reason i used this awesomeonline editor. :P


## Application Screen shots
1. Dashboard Home
![ScreenShot](https://github.com/rjankathi/AdventureWorksCycles/blob/master/screenshots/home.png)
2. Bikes 1
![ScreenShot](https://github.com/rjankathi/AdventureWorksCycles/blob/master/screenshots/bikes2.png)
3. Bikes 2
![ScreenShot](https://github.com/rjankathi/AdventureWorksCycles/blob/master/screenshots/bikes3.png)
4. Bikes 3
![ScreenShot](https://github.com/rjankathi/AdventureWorksCycles/blob/master/screenshots/bikes2.png)
5. Cart
![ScreenShot](https://github.com/rjankathi/AdventureWorksCycles/blob/master/screenshots/cart.png)

## Thanks to (Note : People who inspires me comes under this list. More to be added)
1. Tracy Lee (Lady Leet) helped me to get started on using angular material :)
2. Steve Sanderson (for awesome .net core templates :)
3. https://stackoverflow.com
4. https://angular.io
5. More comming... 
