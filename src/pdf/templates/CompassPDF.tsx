/**
 * Compass PDF Template
 * Two-column layout with sidebar for skills/contact
 */

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import type { ResumeData } from '@/stores';

// Colors
const colors = {
  card: '#FFFFFF',
  sidebar: '#F6F4EE',
  ink: '#17181C',
  inkSoft: '#57585D',
  inkFaint: '#ACADAF',
  red: '#B93E28',
  rule: '#E5E2D9',
};

const SIDEBAR_WIDTH = 180;

// Styles - using built-in Courier for monospace feel
const styles = StyleSheet.create({
  page: {
    width: 595.28,
    height: 841.89,
    backgroundColor: colors.card,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.5,
    flexDirection: 'row',
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    backgroundColor: colors.sidebar,
    padding: 32,
    paddingTop: 46,
  },
  main: {
    flex: 1,
    padding: 46,
    paddingLeft: 36,
  },
  sidebarSection: {
    marginBottom: 24,
  },
  sidebarTitle: {
    fontSize: 8,
    fontWeight: 500,
    color: colors.inkFaint,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 10,
    fontFamily: 'Courier',
  },
  sidebarText: {
    fontSize: 9,
    color: colors.inkSoft,
    marginBottom: 6,
  },
  sidebarLink: {
    fontSize: 9,
    color: colors.red,
    marginBottom: 6,
  },
  skillBadge: {
    fontSize: 8,
    backgroundColor: colors.card,
    color: colors.inkSoft,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 3,
    marginBottom: 6,
    marginRight: 4,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    color: colors.ink,
    marginBottom: 6,
    fontFamily: 'Courier',
  },
  title: {
    fontSize: 11,
    color: colors.inkSoft,
    marginBottom: 24,
  },
  divider: {
    height: 1,
    backgroundColor: colors.rule,
    marginVertical: 16,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 8,
    fontWeight: 500,
    color: colors.inkFaint,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 12,
    fontFamily: 'Courier',
  },
  experienceEntry: {
    marginBottom: 18,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: colors.ink,
  },
  experienceDate: {
    fontSize: 9,
    color: colors.inkFaint,
    fontFamily: 'Courier',
  },
  experienceCompany: {
    fontSize: 9,
    color: colors.inkSoft,
    marginBottom: 6,
  },
  bulletList: {
    marginLeft: 12,
  },
  bullet: {
    fontSize: 9,
    color: colors.inkSoft,
    marginBottom: 4,
    lineHeight: 1.5,
  },
  summary: {
    fontSize: 10,
    color: colors.inkSoft,
    lineHeight: 1.6,
  },
});

interface CompassPDFProps {
  data: ResumeData;
}

const CompassPDF: React.FC<CompassPDFProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {/* Sidebar */}
        <View style={styles.sidebar} fixed>
          {/* Contact */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarTitle}>Contact</Text>
            {personalInfo.email && (
              <Text style={styles.sidebarText}>{personalInfo.email}</Text>
            )}
            {personalInfo.phone && (
              <Text style={styles.sidebarText}>{personalInfo.phone}</Text>
            )}
            {personalInfo.location && (
              <Text style={styles.sidebarText}>{personalInfo.location}</Text>
            )}
            {personalInfo.linkedin && (
              <Text style={styles.sidebarLink}>{personalInfo.linkedin}</Text>
            )}
          </View>

          {/* Skills */}
          {skills.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Skills</Text>
              <View style={styles.skillsContainer}>
                {skills.filter(Boolean).map((skill, i) => (
                  <Text key={i} style={styles.skillBadge}>{skill}</Text>
                ))}
              </View>
            </View>
          )}

          {/* Education */}
          {education.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Education</Text>
              {education.map((edu) => (
                <View key={edu.id} style={{ marginBottom: 12 }}>
                  <Text style={styles.sidebarText}>{edu.degree}</Text>
                  <Text style={{ fontSize: 8, color: colors.inkFaint }}>
                    {edu.school}
                  </Text>
                  <Text style={{ fontSize: 8, color: colors.inkFaint, fontFamily: 'Courier' }}>
                    {edu.startDate} — {edu.endDate}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Main Content */}
        <View style={styles.main}>
          {/* Header */}
          <View fixed>
            <Text style={styles.name}>{personalInfo.fullName || 'Your Name'}</Text>
            <Text style={styles.title}>
              {personalInfo.location || 'Professional'}
            </Text>
          </View>

          <View style={styles.divider} />

          {/* Summary */}
          {summary && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.summary}>{summary}</Text>
            </View>
          )}

          <View style={styles.divider} />

          {/* Experience */}
          {experience.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
              {experience.map((exp) => (
                <View key={exp.id} style={styles.experienceEntry} wrap>
                  <View style={styles.experienceHeader}>
                    <Text style={styles.experienceTitle}>{exp.title}</Text>
                    <Text style={styles.experienceDate}>
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </Text>
                  </View>
                  <Text style={styles.experienceCompany}>
                    {exp.company}
                  </Text>
                  {exp.bullets.length > 0 && (
                    <View style={styles.bulletList}>
                      {exp.bullets.filter(Boolean).map((bullet, i) => (
                        <Text key={i} style={styles.bullet}>
                          • {bullet}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default CompassPDF;
