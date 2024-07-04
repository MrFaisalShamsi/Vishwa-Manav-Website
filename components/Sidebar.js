// components/Sidebar.js
import React from 'react';
import "../components/Sidebar.module.css";
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>UP News</h3>
            <ul>
                <li><Link href="/">गुलामी के प्रतीक पुराने कानूनों में परिवर्तन का कार्य ऐतिहासिक : मुख्यमंत्री डॉ.यादव</Link></li>
                <li><Link href="/">प्रधानमंत्री श्री मोदी के नेतृत्व में बदलते दौर के भारत में अधिक क्षेत्रों में हो रही है प्रगति : मुख्यमंत्री डॉ. यादव</Link></li>
                <li><Link href="/">आप अब तक पहुँचाए गए स्वरूप में लागू किए गए कानून की जानकारियाँ: मुख्यमंत्री डॉ. यादव</Link></li>
                <li><Link href="/">मुख्यमंत्री श्री. मोहन यादव ने वीडियो कांफ्रेंसिंग के माध्यम से अधिकारियों एवं कलेक्टर्स की बैठक की</Link></li>
                <li><Link href="/">कानून व्यवस्था के सर्वे कार्य जल गंगा संरक्षण अभियान पर ₹ 5 से 30 रुपए की अवधि में संचालित गतिविधियों एवं प्रगति की जानकारियाँ दी</Link></li>
                <li><Link href="/">अमरकंटक ताप विद्युत परियोजना की यूनिट नंबर 5 को बनाया लगातर 300 दिन विद्युत उत्पादन करेगा</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
