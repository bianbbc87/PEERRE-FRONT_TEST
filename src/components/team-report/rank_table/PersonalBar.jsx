import styled from "styled-components";
import ThumbImage from "/src/assets/images/team-report/thumb.svg";
import Thumb_fillImage from "/src/assets/images/team-report/thumb_fill.svg";
import LankGuage from "../gauge/RankGauge";
import PropTypes from 'prop-types';

// 배경색 테마 배열
const bgColors = ['#FCEFE9', '#FFFFFF'];

export default function PersonalBar({index}) {

  return (
    <BarWrapper $bg={bgColors[index%bgColors.length]}>
        <CountBox>
            {index + 1}
        </CountBox>
        <Thumb />
        <LankGuage />
        <ThumbFill />
        <Gap $left="20px">
        75개
        </Gap>
        <TagBox>
       <Tag>
        #친절함
       </Tag>
       <Tag>
        #적극적
       </Tag>
       <Tag>
        #빠른답장
       </Tag>
        </TagBox>
    </BarWrapper>
  )
}

export const BarWrapper = styled.div`
width: 100%;
padding: 10px 0;
min-width: 80%;
display: flex;
align-items: center;
text-align: center;
margin: 0;
background-color: ${(props) => props.$bg || '#fff'};

font-size: 16px;
font-weight: 400;
color: #07133B;
`

export const Thumb = styled.div`
background: url(${ThumbImage});
min-width: 31px;
min-height: 28px;
background-repeat: no-repeat;

margin-left: 20px;
margin-right: 10px;
`

export const ThumbFill = styled.div`
background: url(${Thumb_fillImage});
min-width: 31px;
min-height: 28px;
background-repeat: no-repeat;

margin-left: 10px;
`

export const Gap = styled.div`
white-space: nowrap;
margin-top: ${(props) => props.$top || '0'};
margin-left: ${(props) => props.$left || '0'};
margin-right: ${(props) => props.$right || '0'};
margin-bottom: ${(props) => props.$bottom || '0'};
`

export const TagBox = styled.div`
display: flex;
width: 45%;
min-width: 45%;
margin-left: 40px;
text-align: left;
`

export const Tag = styled.div`
margin-left: 15px;
white-space: nowrap;
`

export const CountBox = styled.div`
min-width: 50px;
max-width: 50px;
`

PersonalBar.propTypes = {
    index: PropTypes.number,
  };