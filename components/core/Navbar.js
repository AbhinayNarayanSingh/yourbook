const Navbar = () => {
    const navLinks = [
        {
            name: "Accounts",
            items: [
                {
                    name: "Groups",
                    href: ""
                },
                {
                    name: "Ledgers",
                    href: ""
                },
                {
                    name: "Voucher Types",
                    href: ""
                },
            ]
        },
        {
            name: "Inventory",
            items: [
                {
                    name: "Groups",
                    href: ""
                },
                {
                    name: "Items",
                    href: ""
                },
                {
                    name: "Unit of Measure",
                    href: ""
                },
                {
                    name: "Voucher Types",
                    href: ""
                },
            ]
        },
        {
            name: "Vouchers",
            items: [
                {
                    name: "Sales",
                    href: ""
                },
                {
                    name: "Purchase",
                    href: ""
                },

                {
                    name: "Payment",
                    href: ""
                },
                {
                    name: "Receipt",
                    href: ""
                },

                {
                    name: "Contra",
                    href: ""
                },

                {
                    name: "Credit Note",
                    href: ""
                },
                {
                    name: "Dedit Note",
                    href: ""
                },

                {
                    name: "Inventory Voucher",
                    href: ""
                },
                {
                    name: "Accounting Voucher",
                    href: ""
                },
            ]
        },
        {
            name: "Import",
            items: [
                {
                    name: "Chart of Accounts",
                    href: ""
                },
                {
                    name: "Customers and Vendors",
                    href: ""
                },
                {
                    name: "Invoices and Sales Receipts",
                    href: ""
                },
                {
                    name: "Bank Transactions",
                    href: ""
                },
                // {
                //     name: "",
                //     href: ""
                // },
            ]
        },
        {
            name: "Reports",
            items: [
                {
                    name: "Balance Sheet",
                    href: ""
                },
                {
                    name: "Profit and Loss A/c",
                    href: ""
                },
                {
                    name: "Stock Summary",
                    href: ""
                },
            ]
        },
        {
            name: "Config",
            items: [
                {
                    name: "Invoice",
                    href: ""
                },
                {
                    name: "Statutory & Taxation",
                    href: ""
                },
            ]
        },
    ]
    return (
        <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
            <div class="container-fluid">

                <a class="navbar-brand text-white" href="#">Your Book</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* d-flex justify-content-center w-100 */}
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">

                        {navLinks.map((elm, idx) => {
                            if (elm?.items?.length) {
                                return (
                                    <li class="nav-item dropdown" key={"nav-item__"+idx}>
                                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{elm.name}</a>

                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            {elm.items.map((e, idx) => {
                                                return (
                                                    <li><a class="dropdown-item" href={"#"+e.name} key={"dropdown-item__" + idx} >{e.name}</a></li>
                                                )
                                            })}

                                            {/* <li><hr class="dropdown-divider" /></li> */}
                                        </ul>
                                    </li>
                                )
                            } else {
                                return (
                                    <li class="nav-item" key={"nav-item__"+idx}>
                                        <a class="nav-link text-white" href="#">{elm.name}</a>
                                    </li>
                                )
                            }
                        })}

                    </ul>
                    
                </div>

                <a class="navbar-brand text-white" href="#">Trrench Pvt. Ltd.</a>


            </div>
        </nav>
    )
}

export default Navbar


// https://6262239.extforms.netsuite.com/app/site/crm/externalleadpage.nl/compid.6262239/.f?formid=1044&h=AAFdikaInJ-NuXqv9LejeWh4BLDh-cNBDKKe6V3HoKPPqDf6o6U&clickref=1011lwWayVDQ&leadsource=Online_Affiliate_trafficpoint_2021&redirect_count=1&did_javascript_redirect=T