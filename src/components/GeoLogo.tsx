interface GeoLogoProps {
  color: string;
}

export default function GeoLogo({ color }: GeoLogoProps) {
  return (
    <svg
      width="208"
      height="40"
      viewBox="0 0 208 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M198.976 27.5223L195.587 23.115C195.643 23.0461 195.7 22.9772 195.753 22.9071C197.213 21.0294 197.956 18.696 197.956 15.9759C197.956 14.5014 197.708 13.0806 197.216 11.7497C196.69 10.3289 195.899 9.06117 194.862 7.97687C193.795 6.85868 192.469 5.98469 190.923 5.37594C189.464 4.80341 187.816 4.51364 186.023 4.51364H177.481C176.285 4.51364 175.188 4.93661 174.33 5.64001C173.292 5.17264 172.217 4.79173 171.115 4.51364C169.582 4.12455 168.069 3.92709 166.616 3.92709C164.91 3.92709 163.307 4.2005 161.852 4.73915C160.511 5.23573 159.328 5.9438 158.305 6.82363C158.037 6.59578 157.743 6.39014 157.421 6.21838C156.027 5.47292 154.549 4.89922 153.026 4.51364C151.491 4.12455 149.977 3.92709 148.526 3.92709C146.82 3.92709 145.217 4.2005 143.762 4.73915C142.772 5.10487 141.872 5.59327 141.05 6.17164C140.142 5.15628 138.825 4.51364 137.353 4.51364L126.854 4.51598C125.37 4.51598 124.039 5.16562 123.131 6.19618C122.221 5.16562 120.89 4.51598 119.405 4.51598H115.456C113.971 4.51598 112.641 5.16562 111.73 6.19618C110.822 5.16562 109.49 4.51598 108.007 4.51598H102.518C100.609 4.51598 98.9562 5.5921 98.1261 7.16831C97.5852 6.74067 97.0173 6.35158 96.4155 6.00689C94.0012 4.62698 91.2216 3.92709 88.1528 3.92709C85.8416 3.92709 83.6767 4.31384 81.7226 5.07916C79.7146 5.86435 77.9571 6.99305 76.4994 8.43489C76.1376 8.79126 75.7969 9.16749 75.4761 9.56009C72.823 3.92242 67.0999 0 60.4624 0C55.1643 0 50.4505 2.50278 47.411 6.37845C46.5012 5.24975 45.1243 4.51364 43.5601 4.51364H31.5472C29.3987 4.51364 27.5745 5.87953 26.8849 7.78641C26.1379 7.10639 25.33 6.50932 24.4531 6.00689C22.0376 4.62698 19.258 3.92709 16.1893 3.92709C13.878 3.92709 11.7143 4.31384 9.76016 5.07916C7.75099 5.86435 5.99355 6.99305 4.53585 8.43489C3.06059 9.89192 1.9155 11.6527 1.13221 13.6695C0.380524 15.6044 0 17.7251 0 19.972C0 22.2481 0.389891 24.3875 1.15796 26.3305C1.94477 28.3204 3.07464 30.066 4.51594 31.5184C5.96311 32.9766 7.70298 34.1181 9.68639 34.9092C11.6206 35.6803 13.7527 36.0729 16.0218 36.0729C17.6552 36.0729 19.2475 35.8626 20.7556 35.4478C22.2999 35.0225 23.7494 34.3892 25.0607 33.5666C25.7059 33.1623 26.3112 32.7043 26.8814 32.2042C27.5687 34.1158 29.3952 35.4852 31.5472 35.4852H43.5601C46.301 35.4852 48.5221 33.2687 48.5221 30.5357V28.4921C50.4435 31.3863 53.1469 34.7502 56.9545 38.55C57.9228 39.5174 59.1932 40 60.4624 40C61.7327 40 63.0019 39.5174 63.9702 38.55C68.485 34.0457 71.4472 30.1548 73.3932 26.9323C74.1613 28.6686 75.1869 30.2167 76.4795 31.5184C77.9267 32.9766 79.6666 34.1181 81.6488 34.9092C83.583 35.6803 85.7163 36.0729 87.9854 36.0729C89.6187 36.0729 91.2111 35.8626 92.7191 35.4478C94.2635 35.0225 95.7118 34.3892 97.0243 33.5666C98.2198 32.8165 99.2829 31.8888 100.21 30.8208C100.538 31.2625 100.892 31.6796 101.278 32.0652C103.748 34.5306 107.265 35.7796 111.73 35.7796C115.567 35.7796 118.697 34.8542 121.063 33.0338C121.923 34.499 123.515 35.4852 125.34 35.4852H137.353C138.498 35.4852 139.547 35.0961 140.387 34.4465C142.708 35.5191 145.179 36.0729 147.771 36.0729C149.594 36.0729 151.293 35.8112 152.822 35.2936C154.187 34.8309 155.403 34.1765 156.462 33.3622C159.35 35.1545 162.505 36.0729 165.861 36.0729C167.685 36.0729 169.385 35.8112 170.912 35.2936C171.976 34.9325 172.945 34.45 173.827 33.8751C174.733 34.8624 176.033 35.4852 177.481 35.4852H182.969C183.93 35.4852 184.828 35.2129 185.588 34.7409C186.363 35.22 187.267 35.4852 188.206 35.4852H195.04C196.928 35.4852 198.654 34.4149 199.488 32.7254C200.323 31.0346 200.125 29.0179 198.976 27.5223Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60.4627 4.9502C66.9012 4.9502 72.0985 10.159 72.0985 16.5842C72.0985 16.5842 72.4873 23.0503 60.4627 35.0489C48.4393 23.0503 48.8292 16.5842 48.8292 16.5842C48.8292 10.159 54.0266 4.9502 60.4627 4.9502ZM57.4115 13.5346C57.4115 15.216 58.7778 16.5819 60.4639 16.5819C62.1499 16.5819 63.5174 15.216 63.5186 13.5346C63.5186 11.8439 62.151 10.4827 60.4639 10.4827C58.7778 10.4827 57.4115 11.8428 57.4115 13.5346Z"
        fill="white"
      />
      <path
        d="M150.766 17.6802C150.318 17.5318 149.865 17.3916 149.408 17.2607C148.95 17.131 148.541 16.9768 148.176 16.8004C147.812 16.6228 147.518 16.4136 147.294 16.1706C147.071 15.9287 146.958 15.6214 146.958 15.2487C146.958 14.7089 147.182 14.2719 147.631 13.9354C148.078 13.6 148.656 13.4329 149.367 13.4329C149.926 13.4329 150.504 13.5486 151.102 13.7823C151.701 14.0148 152.298 14.3735 152.895 14.8573L155.08 10.582C154.033 10.0235 152.941 9.59933 151.803 9.31073C150.663 9.02213 149.571 8.87724 148.527 8.87724C147.406 8.87724 146.393 9.0455 145.488 9.38083C144.583 9.71617 143.816 10.187 143.191 10.7911C142.566 11.3975 142.081 12.1243 141.736 12.9714C141.39 13.8197 141.218 14.765 141.218 15.8084C141.218 16.8518 141.381 17.7129 141.709 18.3929C142.034 19.073 142.464 19.6361 142.995 20.0836C143.528 20.53 144.135 20.8899 144.816 21.1598C145.498 21.4297 146.193 21.6762 146.903 21.9006C147.5 22.105 148.009 22.2908 148.428 22.4591C148.848 22.6261 149.189 22.8084 149.45 23.0035C149.713 23.1998 149.899 23.4137 150.01 23.6462C150.122 23.8799 150.179 24.1545 150.179 24.4711C150.179 24.9922 149.96 25.4584 149.521 25.8685C149.081 26.2787 148.414 26.4831 147.518 26.4831C146.735 26.4831 145.941 26.3055 145.138 25.9527C144.335 25.5986 143.522 25.0576 142.702 24.3309L140.351 28.7464C142.627 30.3308 145.101 31.1218 147.77 31.1218C149.058 31.1218 150.21 30.9489 151.229 30.6053C152.246 30.2607 153.105 29.7769 153.806 29.1518C154.505 28.5279 155.036 27.7778 155.401 26.9026C155.766 26.0274 155.947 25.0483 155.947 23.9675C155.947 22.3656 155.531 21.0663 154.7 20.0696C153.869 19.073 152.559 18.2761 150.766 17.6802Z"
        fill="white"
      />
      <path
        d="M16.1895 22.9901H20.6984C20.6048 23.6047 20.4268 24.127 20.1657 24.5546C19.9046 24.9834 19.5733 25.3328 19.1717 25.6027C18.7701 25.8726 18.3181 26.0689 17.8135 26.1893C17.31 26.3108 16.7867 26.3715 16.2457 26.3715C15.3313 26.3715 14.5281 26.2173 13.8373 25.91C13.1465 25.6027 12.5669 25.1692 12.1009 24.6107C11.6338 24.0522 11.2849 23.3909 11.0507 22.6267C10.8177 21.8626 10.7018 21.0341 10.7018 20.1403C10.7018 19.1518 10.8364 18.258 11.1069 17.4564C11.3774 16.656 11.7509 15.9713 12.2274 15.4023C12.7028 14.8356 13.2776 14.3975 13.9485 14.089C14.6218 13.7817 15.3676 13.6286 16.1895 13.6286C17.1789 13.6286 18.0605 13.8799 18.8356 14.3823C19.6096 14.8859 20.2395 15.7143 20.7265 16.8699L25.9345 14.7176C24.9638 12.7254 23.6478 11.2532 21.9864 10.3033C20.3249 9.35336 18.3919 8.87781 16.1895 8.87781C14.4906 8.87781 12.9498 9.14772 11.5694 9.68753C10.1878 10.2285 9.0064 10.9833 8.0264 11.9519C7.0464 12.9206 6.29004 14.089 5.75848 15.4584C5.22574 16.8278 4.95996 18.3327 4.95996 19.972C4.95996 21.63 5.23042 23.1432 5.77253 24.5137C6.31346 25.882 7.06982 27.0562 8.04045 28.0342C9.01108 29.0122 10.1737 29.7717 11.5272 30.3115C12.8807 30.8525 14.3782 31.1224 16.0209 31.1224C17.2152 31.1224 18.3556 30.9728 19.4374 30.6749C20.5205 30.3769 21.5145 29.9434 22.4208 29.3756C23.3258 28.8077 24.115 28.0996 24.7859 27.2514C25.4591 26.4042 25.9907 25.4309 26.3829 24.3315C26.6627 23.5486 26.8489 22.7015 26.9426 21.789C27.0362 20.8752 27.0831 19.8599 27.0831 18.7429H16.1895V22.9901Z"
        fill="white"
      />
      <path
        d="M31.5471 30.5352H43.5599V25.8965H37.0348V22.2627H43.1958V17.624H37.0348V14.1035H43.5599V9.46488H31.5471V30.5352Z"
        fill="white"
      />
      <path
        d="M92.6607 22.9901H88.153V18.7429H99.0465C99.0465 19.8599 98.9985 20.8752 98.906 21.789C98.8123 22.7015 98.6262 23.5486 98.3463 24.3315C97.9541 25.4309 97.4225 26.4042 96.7493 27.2514C96.0773 28.0996 95.2881 28.8077 94.383 29.3756C93.478 29.9434 92.4839 30.3769 91.4009 30.6749C90.3179 30.9728 89.1786 31.1224 87.9844 31.1224C86.3417 31.1224 84.843 30.8525 83.4907 30.3115C82.136 29.7717 80.9745 29.0122 80.0039 28.0342C79.0321 27.0562 78.2769 25.882 77.736 24.5137C77.1939 23.1432 76.9234 21.63 76.9234 19.972C76.9234 18.3327 77.1892 16.8278 77.7219 15.4584C78.2535 14.089 79.0099 12.9206 79.9899 11.9519C80.9699 10.9833 82.1512 10.2285 83.5317 9.68753C84.9133 9.14772 86.4541 8.87781 88.153 8.87781C90.3553 8.87781 92.2872 9.35336 93.9498 10.3033C95.6113 11.2532 96.9273 12.7254 97.8979 14.7176L92.69 16.8699C92.2029 15.7143 91.573 14.8859 90.7991 14.3823C90.024 13.8799 89.1423 13.6286 88.153 13.6286C87.331 13.6286 86.5852 13.7817 85.912 14.089C85.2399 14.3975 84.6662 14.8356 84.1908 15.4023C83.7143 15.9713 83.3408 16.656 83.0703 17.4564C82.7999 18.258 82.6641 19.1518 82.6641 20.1403C82.6641 21.0341 82.7812 21.8626 83.0142 22.6267C83.2471 23.3909 83.5972 24.0522 84.0644 24.6107C84.5304 25.1692 85.11 25.6027 85.8008 25.91C86.4915 26.2173 87.2936 26.3715 88.2092 26.3715C88.7501 26.3715 89.2735 26.3108 89.7769 26.1893C90.2804 26.0689 90.7335 25.8726 91.1351 25.6027C91.5367 25.3328 91.8669 24.9834 92.1292 24.5546C92.3903 24.127 92.5682 23.6047 92.6607 22.9901Z"
        fill="white"
      />
      <path
        d="M115.456 20.6287C115.456 21.2433 115.431 21.8719 115.385 22.5145C115.339 23.1583 115.193 23.7402 114.951 24.2613C114.708 24.7836 114.34 25.2066 113.846 25.5326C113.351 25.8597 112.646 26.0221 111.73 26.0221C110.816 26.0221 110.107 25.8597 109.603 25.5326C109.098 25.2066 108.73 24.7836 108.497 24.2613C108.262 23.7402 108.123 23.1583 108.076 22.5145C108.029 21.8719 108.007 21.2433 108.007 20.6287V9.17106H102.518V21.3835C102.518 24.6621 103.274 27.055 104.787 28.5646C106.299 30.0731 108.613 30.8279 111.73 30.8279C114.848 30.8279 117.159 30.0731 118.662 28.5646C120.164 27.055 120.915 24.6621 120.915 21.3835V9.17106H115.456V20.6287Z"
        fill="white"
      />
      <path
        d="M137.353 30.5352H125.34V9.46488H137.353V14.1035H130.828V17.624H136.989V22.2627H130.828V25.8965H137.353V30.5352Z"
        fill="white"
      />
      <path
        d="M167.498 17.2607C167.954 17.3916 168.409 17.5318 168.857 17.6802C170.649 18.2761 171.96 19.073 172.79 20.0696C173.621 21.0663 174.037 22.3656 174.037 23.9675C174.037 25.0483 173.855 26.0274 173.491 26.9026C173.126 27.7778 172.594 28.5279 171.895 29.1518C171.194 29.7769 170.336 30.2607 169.318 30.6053C168.301 30.9489 167.149 31.1218 165.86 31.1218C163.19 31.1218 160.717 30.3308 158.44 28.7464L160.791 24.3309C161.613 25.0576 162.426 25.5986 163.228 25.9527C164.03 26.3055 164.825 26.4831 165.609 26.4831C166.504 26.4831 167.172 26.2787 167.611 25.8685C168.049 25.4584 168.268 24.9922 168.268 24.4711C168.268 24.1545 168.212 23.8799 168.101 23.6462C167.988 23.4137 167.802 23.1998 167.54 23.0035C167.279 22.8084 166.938 22.6261 166.518 22.4591C166.099 22.2908 165.589 22.105 164.992 21.9006C164.283 21.6762 163.587 21.4297 162.906 21.1598C162.224 20.8899 161.617 20.53 161.085 20.0836C160.554 19.6361 160.124 19.073 159.798 18.3929C159.47 17.7129 159.308 16.8518 159.308 15.8084C159.308 14.765 159.48 13.8197 159.825 12.9714C160.171 12.1243 160.655 11.3975 161.282 10.7911C161.906 10.187 162.673 9.71617 163.578 9.38083C164.484 9.0455 165.497 8.87724 166.616 8.87724C167.662 8.87724 168.754 9.02213 169.892 9.31073C171.03 9.59933 172.124 10.0235 173.169 10.582L170.985 14.8573C170.387 14.3735 169.79 14.0148 169.192 13.7823C168.595 13.5486 168.016 13.4329 167.457 13.4329C166.746 13.4329 166.168 13.6 165.719 13.9354C165.271 14.2719 165.048 14.7089 165.048 15.2487C165.048 15.6214 165.161 15.9287 165.383 16.1706C165.609 16.4136 165.903 16.6228 166.266 16.8004C166.631 16.9768 167.04 17.131 167.498 17.2607Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M188.403 21.9C189.915 21.546 191.058 20.8707 191.833 19.874C192.608 18.8773 192.995 17.578 192.995 15.9749C192.995 15.0811 192.849 14.2433 192.561 13.4605C192.271 12.6776 191.841 11.9894 191.272 11.3924C190.703 10.7965 189.98 10.3268 189.103 9.98206C188.226 9.63738 187.198 9.46445 186.022 9.46445H177.481V30.5347H182.969V22.4305L188.206 30.5347H195.04L188.403 21.9ZM186.498 18.2113C185.919 18.6588 185.089 18.882 184.006 18.882H182.969V13.6836H184.006C185.089 13.6836 185.919 13.908 186.498 14.3543C187.076 14.8018 187.366 15.4445 187.366 16.2834C187.366 17.1212 187.076 17.7638 186.498 18.2113Z"
        fill="white"
      />
      <path
        d="M207.546 3.766C207.546 1.68 205.852 0 203.766 0C201.68 0 200 1.68 200 3.766C200 5.852 201.68 7.518 203.766 7.518C205.852 7.518 207.546 5.852 207.546 3.766ZM206.972 3.766C206.972 5.53 205.53 6.944 203.766 6.944C202.002 6.944 200.588 5.53 200.588 3.766C200.588 2.002 202.002 0.559999 203.766 0.559999C205.53 0.559999 206.972 2.002 206.972 3.766ZM205.53 5.908C205.53 5.866 205.516 5.81 205.502 5.782L204.424 4.032C205.012 3.864 205.362 3.486 205.362 2.772V2.716C205.362 1.652 204.69 1.302 203.528 1.302C203.22 1.302 202.674 1.316 202.464 1.344C202.296 1.358 202.212 1.47 202.212 1.652V5.88C202.212 5.978 202.282 6.09 202.394 6.09H202.744C202.856 6.09 202.94 5.978 202.94 5.88V4.144H203.5L203.668 4.186L204.802 5.978C204.83 6.034 204.9 6.09 204.97 6.09H205.362C205.488 6.09 205.53 6.006 205.53 5.908ZM204.662 2.772C204.662 3.332 204.354 3.542 203.57 3.542C203.458 3.542 203.08 3.528 202.926 3.528V1.96C202.968 1.96 203.038 1.96 203.122 1.96C203.276 1.96 203.458 1.96 203.57 1.96C204.34 1.96 204.662 2.156 204.662 2.716V2.772Z"
        fill="white"
      />
    </svg>
  );
}
