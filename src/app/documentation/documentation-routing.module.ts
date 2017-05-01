import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DocumentationComponent} from "./documentation.component";
import {ComponentStatusComponent} from "./component-status/component-status.component";
import {BadgesDemo} from "./demos/badges/badges.demo";
import {AlertsDemo} from "./demos/alert/alerts.demo";
import {AppLayoutDemo} from "./demos/app-layout/app-layout.demo";
import {ButtonsDemo} from "./demos/buttons/buttons.demo";
import {CardsDemo} from "./demos/card/cards.demo";
import {ListsDemo} from "./demos/lists/lists.demo";
import {ProgressBarsDemo} from "./demos/progress-bars/progress-bars.demo";
import {ButtonGroupDemo} from "./demos/button-group/button-group.demo";
import {CheckboxesDemo} from "./demos/checkboxes/checkboxes.demo";
import {CodeHighlightDemo} from "./demos/code/code.demo";
import {ColorDemo} from "./demos/color/color.demo";
import {DatagridDemo} from "./demos/datagrid/datagrid.demo";
import {DropdownsDemo} from "./demos/dropdown/dropdown.demo";
import {FormsDemo} from "./demos/forms/forms.demo";
import {GridDemo} from "./demos/grid/grid.demo";
import {IconsDemo} from "./demos/iconography/icons.demo";
import {InputFieldsDemo} from "./demos/input-fields/input-fields.demo";
import {LabelsDemo} from "./demos/labels/labels.demo";
import {LoginDemo} from "./demos/login/login.demo";
import {ModalDemo} from "./demos/modal/modal.demo";
import {NavigationDemo} from "./demos/nav/navigation.demo";
import {RadiosDemo} from "./demos/radios/radios.demo";
import {SelectsDemo} from "./demos/selects/selects.demo";
import {SpinnerDemo} from "./demos/spinners/spinner.demo";
import {StackViewDemo} from "./demos/stack-view/stack-view.demo";
import {HeaderDemo} from "./demos/header/header.demo";
import {SidenavDemo} from "./demos/sidenav/sidenav.demo";

const documentationRoutes: Routes = [
    {
        path: "",
        component: DocumentationComponent,
        data: {
            bodyClass: "layout-documentation",
            browserTitle: "Documentation"
        },
        children: [
            {
                path: "",
                component: ComponentStatusComponent,
                data: {
                    bodyClass: "page-documentation",
                    browserTitle: "Documentation"
                }
            },
            {
                path: "alerts",
                component: AlertsDemo,
                data: {
                    bodyClass: "page-alerts",
                    browserTitle: "Alerts"
                }
            },
            {
                path: "app-layout",
                component: AppLayoutDemo,
                data: {
                    bodyClass: "page-app-layout",
                    browserTitle: "Application Layout"
                }
            },
            {
                path: "badges",
                component: BadgesDemo,
                data: {
                    bodyClass: "page-badges",
                    browserTitle: "Badges"
                }
            },
            {
                path: "buttons",
                component: ButtonsDemo,
                data: {
                    bodyClass: "page-buttons",
                    browserTitle: "Buttons"
                }
            },
            {
                path: "button-group",
                component: ButtonGroupDemo,
                data: {
                    bodyClass: "page-button-group",
                    browserTitle: "Button Group"
                }
            },
            {
                path: "cards",
                component: CardsDemo,
                data: {
                    bodyClass: "page-cards",
                    browserTitle: "Cards"
                }
            },
            {
                path: "checkboxes",
                component: CheckboxesDemo,
                data: {
                    bodyClass: "page-checkboxes",
                    browserTitle: "Checkboxes"
                }
            },
            {
                path: "code-highlight",
                component: CodeHighlightDemo,
                data: {
                    bodyClass: "page-code-highlight",
                    browserTitle: "Code Highlight"
                }
            },
            {
                path: "color",
                component: ColorDemo,
                data: {
                    bodyClass: "page-color",
                    browserTitle: "Color Palette"
                }
            },
            {
                path: "datagrid",
                component: DatagridDemo,
                data: {
                    bodyClass: "page-datagrid",
                    browserTitle: "Datagrid"
                }
            },
            {
                path: "dropdowns",
                component: DropdownsDemo,
                data: {
                    bodyClass: "page-dropdowns",
                    browserTitle: "Dropdowns"
                }
            },
            {
                path: "forms",
                component: FormsDemo,
                data: {
                    bodyClass: "page-forms",
                    browserTitle: "Forms"
                }
            },
            {
                path: "grid",
                component: GridDemo,
                data: {
                    bodyClass: "page-grid",
                    browserTitle: "Grid"
                }
            },
            {
                path: "header",
                component: HeaderDemo,
                data: {
                    bodyClass: "page-header",
                    browserTitle: "Header"
                }
            },
            {
                path: "iconography",
                component: IconsDemo,
                data: {
                    bodyClass: "page-iconography",
                    browserTitle: "Iconography"
                }
            },
            {
                path: "input-fields",
                component: InputFieldsDemo,
                data: {
                    bodyClass: "input-fields",
                    browserTitle: "Input Fields"
                }
            },
            {
                path: "labels",
                component: LabelsDemo,
                data: {
                    bodyClass: "page-labels",
                    browserTitle: "Labels"
                }
            },
            {
                path: "lists",
                component: ListsDemo,
                data: {
                    bodyClass: "page-lists",
                    browserTitle: "Lists"
                }
            },
            {
                path: "login",
                component: LoginDemo,
                data: {
                    bodyClass: "page-login",
                    browserTitle: "Login Page"
                }
            },
            {
                path: "modals",
                component: ModalDemo,
                data: {
                    bodyClass: "page-modals",
                    browserTitle: "Modals"
                }
            },
            {
                path: "navigation",
                component: NavigationDemo,
                data: {
                    bodyClass: "page-navigation",
                    browserTitle: "Navigation"
                }
            },
            {
                path: "progress",
                component: ProgressBarsDemo,
                data: {
                    bodyClass: "page-progress",
                    browserTitle: "Progress Bars"
                }
            },
            {
                path: "radios",
                component: RadiosDemo,
                data: {
                    bodyClass: "page-radios",
                    browserTitle: "Radio Buttons"
                }
            },
            {
                path: "select-boxes",
                component: SelectsDemo,
                data: {
                    bodyClass: "page-select-boxes",
                    browserTitle: "Select Boxes"
                }
            },
            {
                path: "sidenav",
                component: SidenavDemo,
                data: {
                    bodyClass: "page-sidenav",
                    browserTitle: "Sidenav"
                }
            },
            {
                path: "spinners",
                component: SpinnerDemo,
                data: {
                    bodyClass: "page-spinners",
                    browserTitle: "Spinners"
                }
            },
            {
                path: "stack-view",
                component: StackViewDemo,
                data: {
                    bodyClass: "page-stack-view",
                    browserTitle: "Stack View"
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(documentationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DocumentationRoutingModule {
}
