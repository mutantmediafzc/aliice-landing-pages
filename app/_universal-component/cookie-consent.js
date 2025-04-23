'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false)

    useEffect(() => {
        const consent = Cookies.get('cookieConsent')
        if (!consent) {
            setShowConsent(true)
        }
    }, [])

    const handleAccept = () => {
        Cookies.set('cookieConsent', 'true', { expires: 365 })
        setShowConsent(false)
        document.getElementById('cookie-consent-content').classList.add('d-none')
    }

    const handleReject = () => {
        Cookies.set('cookieConsent', 'false', { expires: 365 })
        setShowConsent(false)
        document.getElementById('cookie-consent-content').classList.add('d-none')
    }

    if (!showConsent) return null

    return (
        <div id="cookie-consent-content" className="fixed md:w-2/4 sm:mb-8 w-full bottom-0 xl:w-1/4 md:left-8 left-0 bg-white shadow-lg py-3 px-4 z-50 md:rounded-lg">
            <div className="flex flex-col items-start gap-3">
                <div>
                <p className="text-gray-700 text-sm">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{' '}
                    <Link href="/terms-and-conditions" className="text-custom-yellow hover:underline">
                        Privacy Policy
                    </Link>
                    {' '}for more information.
                </p>
                </div>
                <div className="flex gap-3 w-full justify-end">
                    <button
                        onClick={handleReject}
                        className="px-3 text-black border border-gray-300 hover:bg-gray-100 transition-colors"
                        style={{ borderRadius: '3px' }}
                    >
                        Reject All
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-3 bg-[#2C2C2C] text-white hover:bg-opacity-90 transition-colors"
                        style={{ borderRadius: '3px' }}
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    )
}

