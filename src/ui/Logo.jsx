import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  cursor: default;
  user-select: none;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 1.4rem;
  background: linear-gradient(
    135deg,
    var(--color-brand-500) 0%,
    var(--color-brand-800) 100%
  );
  box-shadow: 0 8px 20px rgba(5, 150, 105, 0.28);
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BrandTitle = styled.span`
  font-family: "Plus Jakarta Sans", "Poppins", sans-serif;
  font-size: 2.1rem;
  font-weight: 800;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  color: var(--color-grey-800);
  line-height: 1.1;
`;

const BrandSubtitle = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.28rem;
  text-transform: uppercase;
  color: var(--color-brand-600);
  margin-top: 0.4rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <IconWrapper>
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
          <path d="M9 21V12h6v9" strokeWidth="1.8" />
          <path
            d="M12 7.2l1.8 2.2-1.8 2.2-1.8-2.2 1.8-2.2z"
            fill="#fef08a"
            stroke="#f59e0b"
            strokeWidth="1"
          />
        </svg>
      </IconWrapper>
      <BrandText>
        <BrandTitle>Aura Haven</BrandTitle>
        <BrandSubtitle>Boutique Resort</BrandSubtitle>
      </BrandText>
    </StyledLogo>
  );
}

export default Logo;
