import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Mainlayout.scss'; 
import WorkCard from '../../components/WorkCard';
import Footer from './Footer';

const MainLayout = () => {
    const [workData, setWorkData] = useState([]); // ✅ useState 추가하여 workData 상태 선언

    useEffect(() => {
        fetch("/db.json") // JSON 서버에서 데이터 가져오기
          .then((response) => response.json())
          .then((data) => setWorkData(data.works)) // ✅ 올바른 상태 업데이트
          .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // ✅ workData가 존재하는 경우에만 필터링 수행
    const capstoneWorks = workData?.filter(work => work.category === "작년 캡스톤") || [];
    const youngRaeWorks = workData?.filter(work => work.category === "영래아 작품") || [];
    const projectWorks = workData?.filter(work => work.category === "학과 프로젝트") || [];

    return (
    <div>
        <Navbar/>
        <div className="work-list">
        {/* 카테고리 이름을 한 줄로 정렬 */}
        <div className="category-row">
            <div className="category-box">🏅 작년 캡스톤 🏅</div>
            <div className="category-box">🦝 영래아 작품 🦝</div>
            <div className="category-box">📖 학과 프로젝트 📖</div>
        </div>

        {/* 각 카테고리에 해당하는 작품 목록을 같은 열에 표시 */}
        <div className="work-grid-row">
            <div className="work-grid">
                {capstoneWorks.map((work) => (
                    <WorkCard key={work.id} work={work} />  
                ))}
            </div>
            <div className="work-grid">
                {youngRaeWorks.map((work) => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </div>
            <div className="work-grid">
                {projectWorks.map((work) => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
};

export default MainLayout;
