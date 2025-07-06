import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#0B1120] text-white pt-8 sm:pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col-reverse lg:flex-row gap-8 mb-8 sm:mb-12">
                    {/* Quick Links */}
                    <div className="w-full lg:w-1/3 text-center lg:text-start">
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-secondary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#steps" className="hover:text-secondary transition-colors">
                                    How To
                                </Link>
                            </li>

                            <li>
                                <Link href="/#why-us" className="hover:text-secondary transition-colors">
                                    Why Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/#faq" className="hover:text-secondary transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/#get-report" className="hover:text-secondary transition-colors">
                                    Get Report
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacypolicy" className="hover:text-secondary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col md:flex-row lg:w-3/5 gap-8 justify-between'>
                        {/* Logo Section */}
                        <div className="flex flex-col items-center ">
                            <Link href="/" className="text-2xl sm:text-3xl font-bold mb-4 uppercase">
                                <span className="text-primary">Car</span>
                                <span> Gage</span>
                            </Link>
                            <div className="flex gap-2 mt-4 justify-center md:justify-start">
                                {/* visa */}
                                <svg width="66" height="49" viewBox="0 0 66 49" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                                    <g filter="url(#filter0_dd_20_320)">
                                        <rect x="10" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                        <rect x="9.88795" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" stroke-width="0.224107" />
                                        <path d="M33.0221 15.121L30.8479 25.2845H28.2188L30.3933 15.121H33.0221ZM44.0838 21.6836L45.468 17.8669L46.2645 21.6836H44.0838ZM47.0172 25.2845H49.4491L47.327 15.121H45.0823C44.5779 15.121 44.1523 15.4144 43.9628 15.8667L40.0184 25.2845H42.7794L43.3275 23.7668H46.7007L47.0172 25.2845ZM40.1554 21.9661C40.1667 19.2836 36.4458 19.1359 36.4715 17.9376C36.4792 17.5725 36.827 17.1852 37.5865 17.0858C37.9638 17.0366 39.0012 16.999 40.1792 17.541L40.6405 15.3857C40.0078 15.1561 39.1936 14.9351 38.1809 14.9351C35.5824 14.9351 33.7533 16.3167 33.7379 18.295C33.7215 19.758 35.0436 20.5745 36.0398 21.0609C37.0641 21.5591 37.4083 21.8782 37.4038 22.3238C37.397 23.0061 36.5867 23.3065 35.8307 23.3184C34.5086 23.3393 33.7414 22.9617 33.1299 22.6767L32.6535 24.9037C33.2676 25.1858 34.4015 25.4309 35.5779 25.4435C38.3395 25.4435 40.1464 24.0789 40.1554 21.9661ZM29.2652 15.121L25.0055 25.2845H22.2258L20.1298 17.1733C20.0024 16.6738 19.8917 16.491 19.5047 16.2803C18.8733 15.9377 17.8294 15.6157 16.911 15.4163L16.9737 15.121H21.4474C22.0174 15.121 22.5305 15.5006 22.6598 16.1571L23.767 22.0388L26.5029 15.121H29.2652Z" fill="#1434CB" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd_20_320" x="0.811593" y="0.293736" width="64.9911" height="48.4071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="0.448214" />
                                            <feGaussianBlur stdDeviation="2.24107" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_320" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4.48214" />
                                            <feGaussianBlur stdDeviation="4.48214" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow_20_320" result="effect2_dropShadow_20_320" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_20_320" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                {/* master card */}
                                <svg width="66" height="49" viewBox="0 0 66 49" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                                    <g filter="url(#filter0_dd_20_322)">
                                        <rect x="9.61426" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                        <rect x="9.5022" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" stroke-width="0.224107" />
                                        <path d="M36.2699 13.8484H29.4066V26.1819H36.2699V13.8484Z" fill="#FF5F00" />
                                        <path d="M29.8425 20.0151C29.8414 18.8273 30.1105 17.6548 30.6296 16.5864C31.1486 15.518 31.9039 14.5817 32.8383 13.8484C31.6812 12.9389 30.2915 12.3732 28.8282 12.2162C27.3648 12.0591 25.8867 12.3169 24.563 12.9602C23.2392 13.6034 22.1231 14.6061 21.3423 15.8537C20.5614 17.1013 20.1473 18.5434 20.1473 20.0151C20.1473 21.4869 20.5614 22.929 21.3423 24.1766C22.1231 25.4241 23.2392 26.4269 24.563 27.0701C25.8867 27.7133 27.3648 27.9712 28.8282 27.8141C30.2915 27.657 31.6812 27.0914 32.8383 26.1819C31.9039 25.4485 31.1486 24.5122 30.6296 23.4438C30.1105 22.3754 29.8414 21.2029 29.8425 20.0151Z" fill="#EB001B" />
                                        <path d="M45.5289 20.0151C45.5289 21.4869 45.1149 22.929 44.3341 24.1765C43.5533 25.4241 42.4372 26.4268 41.1135 27.0701C39.7897 27.7133 38.3117 27.9712 36.8484 27.8141C35.385 27.657 33.9954 27.0914 32.8383 26.1819C33.7719 25.4478 34.5266 24.5113 35.0455 23.4431C35.5645 22.3749 35.8341 21.2028 35.8341 20.0151C35.8341 18.8275 35.5645 17.6554 35.0455 16.5872C34.5266 15.5189 33.7719 14.5825 32.8383 13.8484C33.9954 12.9389 35.385 12.3732 36.8484 12.2162C38.3117 12.0591 39.7897 12.3169 41.1135 12.9602C42.4372 13.6034 43.5533 14.6062 44.3341 15.8537C45.1149 17.1013 45.5289 18.5434 45.5289 20.0151Z" fill="#F79E1B" />
                                        <path d="M44.7805 24.8756V24.6231H44.8824V24.5716H44.6231V24.6231H44.7249V24.8756H44.7805ZM45.284 24.8756V24.5711H45.2045L45.1131 24.7805L45.0216 24.5711H44.9421V24.8756H44.9982V24.6459L45.0839 24.8439H45.1421L45.2279 24.6454V24.8756H45.284Z" fill="#F79E1B" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd_20_322" x="0.425851" y="0.293736" width="64.9911" height="48.4071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="0.448214" />
                                            <feGaussianBlur stdDeviation="2.24107" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_322" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4.48214" />
                                            <feGaussianBlur stdDeviation="4.48214" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow_20_322" result="effect2_dropShadow_20_322" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_20_322" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                {/* paypal */}
                                <svg width="66" height="49" viewBox="0 0 66 49" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                                    <g filter="url(#filter0_dd_20_324)">
                                        <rect x="9.22852" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                                        <rect x="9.11646" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" stroke-width="0.224107" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4257 15.646H16.7382C16.5543 15.646 16.3979 15.7796 16.3692 15.9611L15.2822 22.8518C15.2606 22.9879 15.3659 23.1104 15.5039 23.1104H16.7869C16.9708 23.1104 17.1272 22.9768 17.1559 22.7949L17.4491 20.9364C17.4774 20.7544 17.6342 20.6209 17.8177 20.6209H18.6685C20.4388 20.6209 21.4605 19.7643 21.7274 18.0669C21.8476 17.3243 21.7325 16.7408 21.3846 16.332C21.0027 15.8835 20.3251 15.646 19.4257 15.646ZM19.7358 18.1627C19.5888 19.127 18.852 19.127 18.1395 19.127H17.734L18.0185 17.3261C18.0354 17.2174 18.1297 17.1372 18.2397 17.1372H18.4256C18.9109 17.1372 19.3688 17.1372 19.6054 17.4138C19.7463 17.5789 19.7896 17.824 19.7358 18.1627ZM27.4593 18.1318H26.1723C26.0626 18.1318 25.9679 18.212 25.951 18.3209L25.8941 18.6808L25.804 18.5504C25.5254 18.146 24.9042 18.0109 24.2841 18.0109C22.8618 18.0109 21.6472 19.0879 21.4106 20.5988C21.2877 21.3523 21.4625 22.0729 21.89 22.5755C22.2823 23.0375 22.8435 23.2301 23.511 23.2301C24.6569 23.2301 25.2925 22.4933 25.2925 22.4933L25.235 22.8509C25.2134 22.9877 25.3187 23.1102 25.4558 23.1102H26.6151C26.7995 23.1102 26.955 22.9766 26.9841 22.7948L27.6797 18.3904C27.7017 18.2549 27.5968 18.1318 27.4593 18.1318ZM25.6653 20.6364C25.5411 21.3715 24.9575 21.865 24.2134 21.865C23.8397 21.865 23.5409 21.7452 23.3492 21.5181C23.159 21.2926 23.0866 20.9715 23.1472 20.614C23.2632 19.8851 23.8566 19.3756 24.5894 19.3756C24.9548 19.3756 25.2519 19.4968 25.4476 19.726C25.6436 19.9574 25.7215 20.2804 25.6653 20.6364ZM33.0202 18.1317H34.3135C34.4947 18.1317 34.6003 18.3348 34.4974 18.4833L30.196 24.6914C30.1263 24.792 30.0116 24.8518 29.889 24.8518H28.5973C28.4155 24.8518 28.3093 24.6471 28.4146 24.4982L29.7539 22.6078L28.3294 18.4279C28.2802 18.2826 28.3875 18.1317 28.542 18.1317H29.8128C29.978 18.1317 30.1236 18.24 30.1713 18.398L30.9272 20.9226L32.711 18.2955C32.7809 18.1929 32.8969 18.1317 33.0202 18.1317Z" fill="#253B80" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M47.0427 22.8512L48.1457 15.8345C48.1626 15.7256 48.257 15.6454 48.3666 15.645H49.6083C49.7455 15.645 49.8507 15.7679 49.8291 15.9039L48.7414 22.7943C48.7131 22.9762 48.5567 23.1098 48.3725 23.1098H47.2635C47.1264 23.1098 47.0211 22.9872 47.0427 22.8512ZM38.5958 15.6454H35.9078C35.7243 15.6454 35.5679 15.779 35.5392 15.9605L34.4523 22.8512C34.4306 22.9872 34.5359 23.1098 34.6732 23.1098H36.0524C36.1806 23.1098 36.2903 23.0163 36.3103 22.8891L36.6187 20.9358C36.6471 20.7538 36.8038 20.6203 36.9873 20.6203H37.8377C39.6084 20.6203 40.6298 19.7637 40.897 18.0663C41.0176 17.3237 40.9017 16.7402 40.554 16.3314C40.1723 15.8829 39.4953 15.6454 38.5958 15.6454ZM38.9059 18.1621C38.7593 19.1264 38.0224 19.1264 37.3096 19.1264H36.9044L37.1893 17.3255C37.2063 17.2168 37.2997 17.1366 37.4101 17.1366H37.596C38.081 17.1366 38.5393 17.1366 38.7757 17.4132C38.9168 17.5783 38.9597 17.8234 38.9059 18.1621ZM46.6287 18.1312H45.3426C45.232 18.1312 45.1382 18.2114 45.1216 18.3203L45.0647 18.6802L44.9743 18.5498C44.6957 18.1454 44.0749 18.0103 43.4548 18.0103C42.0325 18.0103 40.8182 19.0873 40.5817 20.5981C40.4591 21.3517 40.6331 22.0723 41.0607 22.5748C41.4536 23.0369 42.0141 23.2294 42.6817 23.2294C43.8276 23.2294 44.463 22.4927 44.463 22.4927L44.4057 22.8503C44.384 22.9871 44.4893 23.1096 44.6274 23.1096H45.7861C45.9696 23.1096 46.126 22.976 46.1548 22.7941L46.8507 18.3898C46.872 18.2543 46.7667 18.1312 46.6287 18.1312ZM44.8349 20.6358C44.7114 21.3709 44.1271 21.8644 43.3828 21.8644C43.0098 21.8644 42.7104 21.7446 42.5186 21.5175C42.3284 21.292 42.2569 20.9709 42.3167 20.6134C42.4333 19.8845 43.026 19.375 43.7588 19.375C44.1243 19.375 44.4213 19.4962 44.6172 19.7253C44.8139 19.9568 44.8918 20.2798 44.8349 20.6358Z" fill="#179BD7" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd_20_324" x="0.0401087" y="0.293736" width="64.9911" height="48.4071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="0.448214" />
                                            <feGaussianBlur stdDeviation="2.24107" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_324" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4.48214" />
                                            <feGaussianBlur stdDeviation="4.48214" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow_20_324" result="effect2_dropShadow_20_324" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_20_324" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="text-center md:text-start">
                            <h3 className="text-lg font-bold mb-4">Contact</h3>
                            <div className="space-y-4 flex flex-col items-center md:items-start">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-secondary shrink-0" />
                                    <a href="mailto:report@cargage.us" className="hover:text-secondary transition-colors">
                                        report@cargage.io
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-secondary shrink-0" />
                                    <span className="text-sm sm:text-base">1901 8th Avenue Tuscaloosa, AL 35401</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-sm text-gray-400 pt-6 sm:pt-8 border-t border-gray-800">
                    <p>Copyright © 2017-{new Date().getFullYear()} | Powered by 
                        <Link className="underline pl-1" href={"https://www.linkedin.com/in/sheikh-m-mujtaba-javed-0362872b9/"}>
                         tech devs
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

