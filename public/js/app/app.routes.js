"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./login/home.component');
var auth_component_1 = require('./auth/auth.component');
var user_routes_1 = require('./auth/user.routes');
var clients_component_1 = require('./clients/clients.component');
var client_routes_1 = require('./clients/client.routes');
var routes = ([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'auth', component: auth_component_1.AuthComponent, children: user_routes_1.USER_ROUTES },
    { path: 'clients', component: clients_component_1.ClientsComponent, children: client_routes_1.CLIENT_ROUTES }
]);
exports.routing = router_1.RouterModule.forRoot(routes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFtRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JFLCtCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXZELCtCQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELDRCQUE0QixvQkFBb0IsQ0FBQyxDQUFBO0FBRWpELGtDQUFpQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9ELDhCQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBR3hELElBQU0sTUFBTSxHQUFpQixDQUFDO0lBQzFCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztJQUNyQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsUUFBUSxFQUFFLHlCQUFXLEVBQUU7SUFDakUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxRQUFRLEVBQUUsNkJBQWEsRUFBQztDQUMzRSxDQUFDLENBQUM7QUFFVSxlQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlckNvbmZpZywgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9ob21lLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2F1dGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgVVNFUl9ST1VURVMgfSBmcm9tICcuL2F1dGgvdXNlci5yb3V0ZXMnO1xyXG5cclxuaW1wb3J0IHsgQ2xpZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENMSUVOVF9ST1VURVMgfSBmcm9tICcuL2NsaWVudHMvY2xpZW50LnJvdXRlcyc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSAoW1xyXG4gICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fSxcclxuICAgIHsgcGF0aDogJ2F1dGgnLCBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQsIGNoaWxkcmVuOiBVU0VSX1JPVVRFUyB9LFxyXG4gICAgeyBwYXRoOiAnY2xpZW50cycsIGNvbXBvbmVudDogQ2xpZW50c0NvbXBvbmVudCwgY2hpbGRyZW46IENMSUVOVF9ST1VURVN9XHJcbl0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpOyJdfQ==
