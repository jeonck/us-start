# 🚀 Docusaurus + GitHub Pages 배포 가이드 (Project-U)

이 가이드는 Docusaurus로 제작된 사이트를 GitHub 저장소에 연동하고, GitHub Actions를 통해 자동으로 배포하는 전체 과정을 설명합니다.

---

## 1. Docusaurus 프로젝트 초기화
로컬 환경에서 새로운 Docusaurus 프로젝트를 생성합니다.

```bash
# 'project-u-site'라는 이름으로 클래식 템플릿(TypeScript) 생성
npx create-docusaurus@latest project-u-site classic --typescript
```

## 2. GitHub 저장소 생성 및 연결
GitHub CLI(`gh`)를 사용하거나 GitHub 웹사이트에서 저장소를 만듭니다.

```bash
# Git 초기화
git init

# GitHub 저장소 생성 및 원격 연결 (Public 권한 필요)
gh repo create us-start --public --source=. --remote=origin
```

## 3. 사이트 설정 업데이트 (`docusaurus.config.ts`)
GitHub Pages 환경에 맞춰 다음 항목들을 반드시 수정해야 합니다.

```typescript
const config: Config = {
  title: 'Project-U',
  url: 'https://<본인_ID>.github.io', // 본인의 GitHub Pages URL
  baseUrl: '/us-start/', // 저장소 이름 (앞뒤에 / 필수)
  organizationName: '<본인_ID>', // GitHub 계정명
  projectName: 'us-start', // 저장소 이름
  
  // '페이지 편집' 링크 설정
  presets: [
    [
      'classic',
      {
        docs: {
          editUrl: 'https://github.com/<본인_ID>/us-start/tree/main/',
        },
      },
    ],
  ],
};
```

## 4. 자동 배포 워크플로우 설정 (GitHub Actions)
`.github/workflows/deploy.yml` 파일을 생성하여 코드가 푸시될 때마다 자동으로 빌드 및 배포되도록 합니다.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # main 브랜치에 푸시될 때 실행

permissions:
  contents: write # 배포를 위해 쓰기 권한 필수

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## 5. GitHub 저장소 권한 설정 (중요)
배포 봇이 파일을 생성할 수 있도록 GitHub 웹사이트에서 설정을 변경해야 합니다.

1.  GitHub 저장소의 **Settings** 탭으로 이동합니다.
2.  **Actions** > **General** 메뉴를 클릭합니다.
3.  페이지 하단의 **Workflow permissions** 섹션에서 **Read and write permissions**를 선택하고 저장합니다.

## 6. 배포 확인 및 호스팅 설정
1.  **Actions** 탭에서 워크플로우가 성공적으로 완료되었는지 확인합니다.
2.  워크플로우가 끝나면 `gh-pages`라는 새로운 브랜치가 자동으로 생성됩니다.
3.  **Settings** > **Pages** 탭으로 이동합니다.
4.  **Build and deployment** > **Branch** 설정에서 `gh-pages` 브랜치를 선택하고 저장합니다.
5.  잠시 후 상단에 표시되는 URL([https://<ID>.github.io/us-start/](https://jeonck.github.io/us-start/))로 접속합니다.

---

## 7. 컨텐츠 수정 및 반영 방법
1.  로컬에서 `docs/*.md` 파일을 수정하거나 새로운 파일을 추가합니다.
2.  다음 명령어로 GitHub에 푸시합니다.
    ```bash
    git add .
    git commit -m "내용 업데이트"
    git push origin main
    ```
3.  GitHub Actions가 자동으로 빌드를 시작하며, 약 1~2분 뒤 사이트에 반영됩니다.
