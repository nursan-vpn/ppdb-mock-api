export type ContactInfo = {
    address: string;
    email: string;
    phone: string;
    alternative_phone: string;
    other_phone: string;
    /**
     * Should be already formatted with the country code without the plus sign.
     */
    whatsapp: string;
    /**
     * Profile URL, not the username.
     */
    instagram: string;
    /**
     * Profile URL, not the username.
     */
    facebook: string;
    website: string;
}