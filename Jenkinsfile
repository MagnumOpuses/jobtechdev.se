pipeline {
    agent any
    environment {
        version = "1"
        buildTag = "${version}.${BUILD_NUMBER}"
        openshiftProject = 'jobtechdev'
    }
    stages{
        stage('Build and Tag Openshift Image'){
            steps{
                openshiftBuild(namespace:'${openshiftProject}', bldCfg: '${buildName}', showBuildLogs: 'true')
                openshiftTag(namespace:'${openshiftProject}', srcStream: '${buildName}', srcTag: 'latest', destStream: '${buildName}', destTag:'${buildTag}')
            }
        }
        stage('Deploy to stage or prod'){
            steps{
                sh "oc set image dc/'${buildName}' '${buildName}'=docker-registry.default.svc:5000/${openshiftProject}/'${buildName}':${buildTag} -n ${openshiftProject}"
                openshiftDeploy(depCfg: '${buildName}', namespace: '${openshiftProject}', verbose: 'false', waitTime: '', waitUnit: 'sec')
                openshiftVerifyDeployment(depCfg: '${buildName}', namespace: '${openshiftProject}', replicaCount: '1', verbose: 'false', verifyReplicaCount: 'false', waitTime: '15', waitUnit: 'sec')
            }
        }
    }
    post {
        success {
            slackSend color: 'good', message: "${GIT_URL}, Branch: ${GIT_BRANCH}, Commit: ${GIT_COMMIT} successfully built to project ${openshiftProject} build: ${buildTag}."
        }
        failure {
            slackSend color: 'bad', message: "${GIT_URL} ${GIT_BRANCH} ${GIT_COMMIT} failed to build to ${openshiftProject} build ${buildTag}."
        }
        unstable {
            slackSend color: 'bad', message: "${GIT_URL} ${GIT_BRANCH} ${GIT_COMMIT} unstable build for ${openshiftProject} build ${buildTag}."
        }
    }
}
