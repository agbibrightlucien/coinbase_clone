import coinbaseLogo from "../../assets/coinbaseLogo.svg";

function Footer() {
    return (
        <footer className="bg-gray-100 border-t">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 flex gap-10">
                {/* Logo */}
                <div className="shrink-0 pt-1">
                    <img src={coinbaseLogo} alt="Coinbase" className="h-8 w-8" />
                </div>

                {/* Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full">
                    {/* Column 1: Company + Learn */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">About</a></li>
                                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                                <li><a href="#" className="hover:text-blue-600">Affiliates</a></li>
                                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                                <li><a href="#" className="hover:text-blue-600">Press</a></li>
                                <li><a href="#" className="hover:text-blue-600">Security</a></li>
                                <li><a href="#" className="hover:text-blue-600">Investors</a></li>
                                <li><a href="#" className="hover:text-blue-600">Vendors</a></li>
                                <li><a href="#" className="hover:text-blue-600">Legal & privacy</a></li>
                                <li><a href="#" className="hover:text-blue-600">Cookie policy</a></li>
                                <li><a href="#" className="hover:text-blue-600">Cookie preferences</a></li>
                                <li><a href="#" className="hover:text-blue-600">Digital Asset Disclosures</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Learn</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">Explore</a></li>
                                <li><a href="#" className="hover:text-blue-600">Market statistics</a></li>
                                <li><a href="#" className="hover:text-blue-600">Coinbase Bytes newsletter</a></li>
                                <li><a href="#" className="hover:text-blue-600">Crypto basics</a></li>
                                <li><a href="#" className="hover:text-blue-600">Tips & tutorials</a></li>
                                <li><a href="#" className="hover:text-blue-600">Crypto glossary</a></li>
                                <li><a href="#" className="hover:text-blue-600">Market updates</a></li>
                                <li><a href="#" className="hover:text-blue-600">What is Bitcoin?</a></li>
                                <li><a href="#" className="hover:text-blue-600">What is crypto?</a></li>
                                <li><a href="#" className="hover:text-blue-600">What is a blockchain?</a></li>
                                <li><a href="#" className="hover:text-blue-600">How to set up a crypto wallet?</a></li>
                                <li><a href="#" className="hover:text-blue-600">How to send crypto?</a></li>
                                <li><a href="#" className="hover:text-blue-600">Taxes</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Individuals + Businesses + Institutions */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Individuals</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">Buy & sell</a></li>
                                <li><a href="#" className="hover:text-blue-600">Earn free crypto</a></li>
                                <li><a href="#" className="hover:text-blue-600">Base App</a></li>
                                <li><a href="#" className="hover:text-blue-600">Coinbase One</a></li>
                                <li><a href="#" className="hover:text-blue-600">Debit Card</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Businesses</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">Asset Listings</a></li>
                                <li><a href="#" className="hover:text-blue-600">Coinbase Business</a></li>
                                <li><a href="#" className="hover:text-blue-600">Payments</a></li>
                                <li><a href="#" className="hover:text-blue-600">Commerce</a></li>
                                <li><a href="#" className="hover:text-blue-600">Token Manager</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Institutions</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">Prime</a></li>
                                <li><a href="#" className="hover:text-blue-600">Staking</a></li>
                                <li><a href="#" className="hover:text-blue-600">Exchange</a></li>
                                <li><a href="#" className="hover:text-blue-600">International Exchange</a></li>
                                <li><a href="#" className="hover:text-blue-600">Derivatives Exchange</a></li>
                                <li><a href="#" className="hover:text-blue-600">Verified Pools</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Developers */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Developers</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600">Developer Platform</a></li>
                            <li><a href="#" className="hover:text-blue-600">Base</a></li>
                            <li><a href="#" className="hover:text-blue-600">Server Wallets</a></li>
                            <li><a href="#" className="hover:text-blue-600">Embedded Wallets</a></li>
                            <li><a href="#" className="hover:text-blue-600">Base Accounts (Smart Wallets)</a></li>
                            <li><a href="#" className="hover:text-blue-600">Onramp & Offramp</a></li>
                            <li><a href="#" className="hover:text-blue-600">x402</a></li>
                            <li><a href="#" className="hover:text-blue-600">Trade API</a></li>
                            <li><a href="#" className="hover:text-blue-600">Paymaster</a></li>
                            <li><a href="#" className="hover:text-blue-600">OnchainKit</a></li>
                            <li><a href="#" className="hover:text-blue-600">Data API</a></li>
                            <li><a href="#" className="hover:text-blue-600">Verifications</a></li>
                            <li><a href="#" className="hover:text-blue-600">Node</a></li>
                            <li><a href="#" className="hover:text-blue-600">AgentKit</a></li>
                            <li><a href="#" className="hover:text-blue-600">Staking</a></li>
                            <li><a href="#" className="hover:text-blue-600">Faucet</a></li>
                            <li><a href="#" className="hover:text-blue-600">Exchange API</a></li>
                            <li><a href="#" className="hover:text-blue-600">International Exchange API</a></li>
                            <li><a href="#" className="hover:text-blue-600">Prime API</a></li>
                            <li><a href="#" className="hover:text-blue-600">Derivatives API</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Support + Asset prices + Stock prices */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">Help center</a></li>
                                <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
                                <li><a href="#" className="hover:text-blue-600">Create account</a></li>
                                <li><a href="#" className="hover:text-blue-600">ID verification</a></li>
                                <li><a href="#" className="hover:text-blue-600">Account Information</a></li>
                                <li><a href="#" className="hover:text-blue-600">Payment methods</a></li>
                                <li><a href="#" className="hover:text-blue-600">Account access</a></li>
                                <li><a href="#" className="hover:text-blue-600">Supported crypto</a></li>
                                <li><a href="#" className="hover:text-blue-600">Status</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Asset prices</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">Bitcoin price</a></li>
                                <li><a href="#" className="hover:text-blue-600">Ethereum price</a></li>
                                <li><a href="#" className="hover:text-blue-600">Solana price</a></li>
                                <li><a href="#" className="hover:text-blue-600">XRP price</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Stock prices</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">NVIDIA price</a></li>
                                <li><a href="#" className="hover:text-blue-600">Apple price</a></li>
                                <li><a href="#" className="hover:text-blue-600">Microsoft price</a></li>
                                <li><a href="#" className="hover:text-blue-600">Amazon price</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className="border-t py-6 text-center text-sm text-gray-500 flex flex-col items-center gap-2">
                <p><strong>Disclaimer:</strong> This is a student demo project and is not affiliated with, endorsed by, or connected to Coinbase. Do not enter real personal information.</p>
                <p>© {new Date().getFullYear()} Crypto App Demo. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;