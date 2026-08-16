# 개인 연구 홈페이지

정적 HTML 홈페이지입니다. 빌드 도구나 설치가 필요 없고, 텍스트만 고치면 됩니다.

## 파일 구성

| 파일 | 설명 |
|---|---|
| `index.html` | **내용을 고치는 곳.** `EDIT 1`~`EDIT 8` 주석을 따라가며 채우면 됩니다. |
| `style.css` | 디자인. 색/여백은 맨 위 `:root` 값만 바꾸면 전체 반영됩니다. |
| `script.js` | 다크모드 토글. 손댈 일 없습니다. |
| `assets/profile.svg` | 프로필 사진 자리. 본인 사진으로 교체하세요. |
| `assets/cv.pdf` | CV 파일 자리. PDF를 이 이름으로 넣으세요. |

## 1. 로컬에서 확인하기

`index.html`을 더블클릭하면 브라우저에서 바로 열립니다. 고치고 저장한 뒤 새로고침(F5)하면 반영됩니다.

## 2. 내용 채우기

`index.html`을 메모장이나 VS Code로 열어 `EDIT` 주석 8곳을 순서대로 채웁니다.

논문을 추가할 때는 `<li class="pub">`부터 `</li>`까지를 통째로 복사해서 아래에 붙여넣고 내용만 바꾸면 됩니다. 본인 이름은 `<strong>홍길동</strong>`처럼 감싸면 굵게 표시됩니다.

**꼭 바꿔야 하는 것**
- `Your Name` (여러 군데에 있으니 전체 찾아바꾸기 권장)
- 이메일 주소 `you@example.ac.kr`
- Google Scholar / ORCID / GitHub 링크
- 안 쓰는 섹션은 `<section>`부터 `</section>`까지 통째로 지우고, 상단 메뉴(`navlinks`)의 해당 링크도 함께 지우세요.

## 3. GitHub Pages로 배포하기 (무료)

### 3-1. 계정과 저장소 만들기

1. [github.com](https://github.com) 가입 (무료)
2. 우측 상단 `+` → **New repository**
3. **Repository name**을 정확히 `사용자명.github.io` 로 입력
   (예: 아이디가 `gildong`이면 `gildong.github.io`)
4. **Public** 선택 → **Create repository**

> 저장소 이름을 이 형식으로 만들면 별도 설정 없이 `https://사용자명.github.io` 주소가 바로 생깁니다.

### 3-2. 파일 올리기 — 방법 A: 웹에서 드래그 (쉬움)

1. 만든 저장소 페이지에서 **uploading an existing file** 클릭
2. `index.html`, `style.css`, `script.js`, `assets` 폴더를 드래그해서 놓기
3. 아래 **Commit changes** 클릭

### 3-2. 파일 올리기 — 방법 B: git 명령어 (수정이 잦다면 이쪽)

이 폴더에서 터미널을 열고:

```bash
git add . && git commit -m "Update homepage" && git push
```

처음 한 번만 아래를 먼저 실행해 저장소와 연결합니다 (`사용자명` 두 군데 교체):

```bash
git remote add origin https://github.com/사용자명/사용자명.github.io.git && git branch -M main && git push -u origin main
```

### 3-3. 확인

1~2분 뒤 `https://사용자명.github.io` 로 접속하면 홈페이지가 보입니다.
안 보이면 저장소 **Settings → Pages** 에서 Source가 `Deploy from a branch` / `main` / `/ (root)` 인지 확인하세요.

## 4. 나중에 도메인을 사면

Settings → Pages → **Custom domain** 에 도메인을 입력하고, 도메인 업체 DNS에서 GitHub이 안내하는 레코드를 등록하면 됩니다. 지금 만든 페이지를 그대로 쓸 수 있습니다.

## 참고

- 저장소가 Public이므로 올린 파일은 누구나 볼 수 있습니다. 미공개 원고나 개인정보가 담긴 PDF는 올리지 마세요.
- 검색 노출을 원하면 [Google Search Console](https://search.google.com/search-console)에 주소를 등록하세요.
